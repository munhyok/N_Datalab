import os, sys
import re
import math
import requests
from bs4 import BeautifulSoup
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
#from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from datetime import date
from datetime import datetime, timedelta
import datetime
import time

import tkinter
from tkinter import *
import tkinter.ttk as ttk
from tkinter import messagebox

import pandas as pd
import numpy as np

from openpyxl import Workbook, load_workbook
from openpyxl.styles import PatternFill
from openpyxl.styles.differential import DifferentialStyle
from openpyxl.formatting.rule import Rule
from multiprocessing import Pool, Process, Queue, Pipe

import platform
from pastCrawler import pastCrawler
from nowCrawler import nowCrawler
from doScrollDown import doScrollDown

userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
option = Options()

folderPath = os.path.dirname(os.path.realpath(__file__))
packed_extension_path = './itemScout.crx'
option.add_extension(packed_extension_path)
option.add_argument("user-agent="+userAgent)
option.add_argument("lang=ko_KR")
#option.add_argument('headless')
option.add_argument('window-size=1920x1080')
option.add_argument("disable-gpu")

now=datetime.datetime.now()
nowYear = now.year
nowMonth = now.month
nowDay = now.day

options = {
    '화장품/미용':['','스킨케어', '베이스메이크업', '색조메이크업',
     '클렌징', '마스크/팩', '선케어', '남성화장품',
     '향수','바디케어','헤어케어','헤어스타일링','네일케어','뷰티소품'],
    
    '패션의류':['','여성의류','여성언더웨어/잠옷','남성의류','남성언더웨어/잠옷']
    
    
    }

options_2 = {
    '스킨케어':['','넥케어','스킨/토너','로션','에센스','크림','아이케어','미스트',
            '페이스오일','화장품세트','톤업크림'],
    '베이스메이크업':['','BB크림','CC크림','메이크업베이스','프라이머','파운데이션','파우더','트윈케이크',
               '컨실러','베이스메이크업세트'],
    '색조메이크업':['','립스틱','립케어','립글로스','립틴트','립라이너','아이섀도','아이라이너','마스카라',
              '아이브로','블러셔','하이라이터/쉐이딩','색조메이크업세트','속눈썹영양제'],
    '클렌징':['','클렌징폼','클렌징오일','클렌징크림','클렌징로션','클렌징젤','클렌징워터','클렌징티슈','클렌징비누',
           '클렌징파우더','립앤아이리무버','스크럽/필링','클렌징세트'],
    '마스크팩':['','마스크시트','필오프팩','워시오프팩','코팩','수면팩','마사지크림/젤','마스크/팩세트'],
    '선케어':['','선크림','선스프레이','선스틱','선파우더/쿠션','애프터선','선케어세트','태닝'],
    '남성화장품':['','스킨','로션','에센스','크림','아이케어','올인원','선크림','클렌징','스크럽/필링',
             '마스크/팩'],
    '향수':['','여성향수','남성향수','남녀공용향수','향수세트'],
    '바디케어':['','바디크림','바디오일','바디미스트','바디파우더','바디클렌저','바디스크럽','여성청결제','목욕비누','핸드케어','풋케어',
            '입욕제','아로마테라피','데오드란트','제모제','바디슬리밍','바디케어세트','바디로션','샤워코롱'],
    '헤어케어':['','샴푸','린스','트리트먼트','헤어에센스','헤어팩','헤어미스트','두피케어','탈모케어','헤어케어세트'],
    '헤어스타일링':['','헤어왁스','헤어스프레이','헤어무스','헤어젤','헤어글레이즈','염색약','파마약'],
    '네일케어':['','매니큐어','네일아트','네일영양제','네일리무버','네일케어도구','네일케어세트'],
    '뷰티소품':['','아이소품','페이스소품','헤어소품','바디소품','메이크업브러시','타투','화장품케이스','DIY화장품재료'],
    
    #####
    '여성의류':['','니트/스웨터','카디건','원피스','티셔츠','블라우스/셔츠','점퍼','재킷','코트','바지','청바지','스커트','레깅스','트레이닝복',
            '조끼','정장세트','한복','유니폼/단체복','파티복','레인코트','점프슈트','코디세트'],
    '여성언더웨어/잠옷':['','브라','팬티','브라팬티세트','잠옷/홈웨어','시즌성내의','보정속옷','슬립','러닝/캐미솔','속치마/속바지','언더웨어소품'],
    '남성의류':['','니트/스웨터','티셔츠','셔츠/남방','카디건','점퍼','재킷','코트','청바지','바지','조끼','정장세트','트레이닝복','한복','유니폼/단체복',
            '레인코트','코디세트','점프슈트'],
    '남성언더웨어/잠옷':['','팬티','러닝','러닝팬티세트','잠옷/홈웨어','시즌성내의','보정속옷']
    
}

#categoryList = ['화장품/미용','패션의류']
#
#secondList = [
#    ['스킨케어', '베이스메이크업', '색조메이크업',
#     '클렌징', '마스크/팩', '선케어', '남성화장품',
#     '향수','바디케어','헤어케어','헤어스타일링','네일케어','뷰티소품'],
#    ['여성의류','여성언더웨어/잠옷','남성의류','남성언더웨어/잠옷']
#]

yearList = ['2023','2022','2021','2020','2019','2018']
monthList = ['01','02','03','04','05','06','07','08','09','10','11','12']




def get_var_1(event):
    value = cb1_var.get()
    cb2_var.set(options[value][0])
    cb2.config(values=options[value])

def get_var_2(event):
    value = cb2_var.get()
    cb3_var.set(options_2[value][0])
    cb3.config(values=options_2[value])
    
    
    
def init():
    
    readYear = Y_comboList.get()
    readMonth = M_comboList.get()
    
    readOption_1 = cb1.get()
    readOption_2 = cb2.get()
    readOption_3 = cb3.get()
    
    readRadio = radVar.get()
    
    if readRadio == 0:
        messagebox.showinfo('에러','옵션을 선택해주세요')
    else:
        crawlDataLAB(readYear, readMonth, readOption_1, readOption_2, readOption_3, readRadio)



def crawlDataLAB(readYear, readMonth, readOption_1, readOption_2, readOption_3, readRadio):
    
    start = time.time()
    avgSell = ''
    now=datetime.datetime.now()
    nowYear = now.year
    nowMonth = now.month
    nowDay = now.day
    
    
    
    tmp_column_keyword = []
    tmp_column_productNum = []
    tmp_column_title = []
    tmp_column_review = []
    tmp_column_avgSell = []
    tmp_column_monthSearch = []
    tmp_column_competition = []
    tmp_column_threeDay = []
    tmp_column_sixMonth = []
    tmp_column_threeDay_sell = []
    tmp_column_sixMonth_sell = []
    rm_duplicate = []
    
    
    #readYear = Y_comboList.get()
    #readMonth = M_comboList.get()
    #
    #readOption_1 = cb1.get()
    #readOption_2 = cb2.get()
    #readOption_3 = cb3.get()
    
    
    pastKeywordList = []
    nowKeywordList = []
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager(os_type="mac_arm64").install()),options=option)
    
    driver.get('https://datalab.naver.com/shoppingInsight/sCategory.naver')
    time.sleep(1)
    
    
    category = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div/div[1]/span').click()
    driver.find_element(By.LINK_TEXT, readOption_1).click()
    time.sleep(0.3)
    
    if readOption_2 != '':
        category_2 = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div/div[2]/span').click()
        driver.find_element(By.LINK_TEXT, readOption_2).click()
        time.sleep(0.3)
    if readOption_3 != '':
        category_3 = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div/div[3]/span').click()
        driver.find_element(By.LINK_TEXT, readOption_3).click()
        time.sleep(0.3)
    
    
    
    
    if readRadio == 1:
        
        nowKeywordList = nowCrawler(driver, readYear, readMonth)
        print(nowKeywordList)
        rm_duplicate = nowKeywordList
    elif readRadio == 2:
        pastKeywordList = pastCrawler(driver, str(int(readYear) - 1))
        print(pastKeywordList)
        nowKeywordList = nowCrawler(driver, readYear, readMonth)
        print(nowKeywordList)
    
        #s = set(pastKeywordList)
        #rm_duplicate = [x for x in nowKeywordList if x not in s] #순서 보존
    
        rm_duplicate = list(set(nowKeywordList) - set(pastKeywordList)) #순서 보존 X

        print('='*60)
        print(f'중복 값 제거 {rm_duplicate}')
        print(len(rm_duplicate))

    
    for index in range(len(rm_duplicate)):
        
        driver.get('https://search.shopping.naver.com/search/all?query='+rm_duplicate[index])
        
        driver.refresh()
        time.sleep(1)
        
        doScrollDown(600, driver)
        
        time.sleep(1)
        req = driver.page_source
        soup = BeautifulSoup(req, 'html.parser')

        items = soup.find_all("li", attrs={"class":"basicList_item__0T9JD"})

        print(len(items))
        
        time.sleep(1.5)
        
        try:
            
            driver.switch_to.frame('its-keyword-analysis')
            WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div[8]/div/span[1]')))
            monthlySearch = driver.find_element(By.XPATH, '/html/body/div/div[2]/div/div[1]/div[1]/div[1]/div[2]/div[2]/span[1]').text
            avgSell = driver.find_element(By.XPATH, '/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div[8]/div/span[1]').text
            competition = driver.find_element(By.XPATH, '/html/body/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]').text
            print(avgSell)
            print(monthlySearch)
            print(competition)
        except: 
            monthlySearch = '수집 실패'
            avgSell = '수집 실패'
            competition = '수집 실패'
        

        for idx, item in enumerate(items):
            
            try:
                
                title = item.find("a", attrs={"class":"basicList_link__JLQJf"})["title"]
                
                try:
                    review = item.find('em', attrs={"class":"basicList_num__sfz3h"}).get_text()
                except: review = '리뷰 없음'
                productNum = soup.find('span', attrs={'class':'subFilter_num__S9sle'}).get_text()
                href = item.find("a", attrs={"class":"basicList_link__JLQJf"})["href"]
                
            except: pass
        
            driver.get(href)
            current_url = driver.current_url
            
            if 'smartstore.naver.com' in current_url or 'brand.naver.com' in current_url:
                
                try:
                    
                    result = driver.switch_to.alert
                    
                    try:
                        result.accept()
                    except: result.dismiss()
                    
                except: pass
                driver.implicitly_wait(10)
                time.sleep(1)
                

                try:
                    
                    driver.switch_to.frame('its-product-analysis')
                    
                    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '/html/body/div/div/div[2]/div[2]/div/div[2]/div[6]/div[2]/div[2]')))

                    threeDay= driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div[2]/div/div[2]/div[6]/div[2]/div[2]').text
                    sixMonth= driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div[2]/div/div[2]/div[6]/div[1]/div[2]').text
                    
                    threeDay_ = threeDay.split('/')
                    sixMonth_ = sixMonth.split('/')
                except:
                    threeDay_ = []
                    sixMonth_ = []
                    threeDay = ''
                    sixMonth = ''
            else:
                
                try:
                    WebDriverWait(driver, 1).until(EC.alert_is_present())
                    result = driver.switch_to.alert
                    try:
                        result.accept()
                    except: result.dismiss()
                    
                except: 
                    pass
                
                threeDay_ = []
                sixMonth_ = []
                threeDay = ''
                sixMonth = ''
                
                
                
                
                
            
                    
            print('-'*30)
            print(index)
            print("keyword : {}".format(rm_duplicate[index]))
            print("평균판매가 : {}".format(avgSell))
            print("월 검색량: {}".format(monthlySearch))
            print("productNum : {}".format(productNum))
            print("title : {}".format(title))
            print("review : {}".format(review))
            print("href : {}".format(href))
            print("예상 판매량/매출액(3일): {}".format(threeDay))
            print("예상 판매량/매출액(6개월): {}".format(sixMonth))
            
            print()
            
            
            
            tmp_column_keyword.append(rm_duplicate[index])
            tmp_column_avgSell.append(avgSell)
            tmp_column_monthSearch.append(monthlySearch)
            tmp_column_competition.append(competition)
            tmp_column_productNum.append(productNum)
            tmp_column_title.append(title)
            tmp_column_review.append(review)
            try:
                
                tmp_threeDay = threeDay_[0].replace('건','')
                tmp_sixMonth = sixMonth_[0].replace('건','')
                tmp_threeDay_sell = threeDay_[1].replace('만원','0000')
                tmp_sixMonth_sell = sixMonth_[1].replace('만원','0000')
                
                print(tmp_threeDay)
                
                tmp_column_threeDay.append(tmp_threeDay)
                tmp_column_sixMonth.append(tmp_sixMonth)
                tmp_column_threeDay_sell.append(tmp_threeDay_sell)
                tmp_column_sixMonth_sell.append(tmp_sixMonth_sell)
            except:
                tmp_column_threeDay.append('')
                tmp_column_sixMonth.append('')
                tmp_column_threeDay_sell.append('')
                tmp_column_sixMonth_sell.append('')
                
            
 
    
    df = pd.DataFrame({
        "키워드" : tmp_column_keyword,
        "상품수" : tmp_column_productNum,
        "검색량" : tmp_column_monthSearch,
        "평균판매가": tmp_column_avgSell,
        "경쟁 강도": tmp_column_competition,
        "제품명" : tmp_column_title,
        "리뷰수" : tmp_column_review,
        "예상판매량(3일)" : tmp_column_threeDay,
        "예상판매량(6개월)" : tmp_column_sixMonth,
        "매출액(3일, 만원)": tmp_column_threeDay_sell,
        "매출액(6개월, 만원)":tmp_column_sixMonth_sell
    })
    
    #df = df.set_index(['키워드','상품수'])
    
    
    
    print(df)
    
      
    
    driver.quit()
    
    df.to_excel(excel_writer= str(nowYear)+str(nowMonth)+str(nowDay)+'-'+str(int(time.time()))+'.xlsx')
    
    messagebox.showinfo('완료','소요시간: '+str(math.trunc(time.time()-start))+'초')
            


    

    

if __name__=='__main__':

    window = tkinter.Tk()
    window.title('DataLab')
    window.geometry('300x600+300+200')
    window.resizable(False,False)

    pTitle = Label(window, text = '데이터랩 수집기')
    cb1_values = list(options.keys())
    cb1_var = StringVar()
    cb1_var.set(cb1_values[0])
    cb1 = ttk.Combobox(window, height=5, values=list(options.keys()), state="readonly", textvariable=cb1_var)
    cb1.bind('<<ComboboxSelected>>', get_var_1)
    
    cb2_var = StringVar()
    cb2_values = list(options_2.keys())
    cb2_var.set(options[cb1_values[0]][0])
    cb2 = ttk.Combobox(window, state="readonly", values=options[cb1_values[0]], textvariable=cb2_var)
    cb2.bind('<<ComboboxSelected>>', get_var_2)
    
    cb3_var = StringVar()
    cb3_values = list(options_2.keys())
    cb3_var.set(options_2[cb2_values[0]][0])
    cb3 = ttk.Combobox(window,state="readonly", values=options_2[cb2_values[0]], textvariable=cb3_var)
    
    
    


    dateSelect = Label(window, text='날짜를 선택해주세요')
    yearLabel = Label(window, text='연도')
    monthLabel = Label(window, text='월')
    Y_comboList = ttk.Combobox(window, height=5, values=yearList, state="readonly")
    Y_comboList.current(0)
    M_comboList = ttk.Combobox(window, height=5, values=monthList, state="readonly")
    M_comboList.current(0)
    
    radVar = IntVar()
    r1 = ttk.Radiobutton(window, text='금일 모든 키워드', variable=radVar, value=1)
    r2 = ttk.Radiobutton(window, text='중복 제외 키워드', variable=radVar, value=2)
    
    
    start = Button(window, text='데이터랩 수집 시작', command=init)
    
    pTitle.pack()
    cb1.pack()
    cb2.pack()
    cb3.pack()
    dateSelect.pack()
    yearLabel.pack()
    Y_comboList.pack()
    monthLabel.pack()
    M_comboList.pack()
    r1.pack()
    r2.pack()
    start.pack()
    
    window.mainloop()
