import os, sys
import re
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
from datetime import datetime
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

import platform

def pastCrawler(driver, year):
    pastKeywordList = []
    beforeYear = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[1]/div[1]/span').click()
    driver.find_element(By.LINK_TEXT, year).click()
    time.sleep(0.2)
    beforeMonth = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[1]/div[2]/span').click()
    driver.find_element(By.LINK_TEXT, '01').click()
    time.sleep(0.2)
    beforeDay = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[1]/div[3]/span').click()
    driver.find_element(By.LINK_TEXT, '01').click()
    time.sleep(0.2)
    
    afterYear = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[3]/div[1]/span').click()
    driver.find_element(By.LINK_TEXT, year).click()
    time.sleep(0.2)
    afterMonth = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[3]/div[2]/span').click()
    driver.find_element(By.LINK_TEXT, '12').click()
    time.sleep(0.2)
    afterDay = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div[2]/span[3]/div[3]/span').click()
    driver.find_element(By.LINK_TEXT, '31').click()
    
    time.sleep(0.5)
    
    btnSubmit = driver.find_element(By.XPATH, '/html/body/div[2]/div[2]/div/div[2]/div/div[1]/div/a').click()
    time.sleep(3)
    

    
    
    for i in range(0,1):
        req = driver.page_source
        soup = BeautifulSoup(req, 'html.parser')
    
        #hotList = soup.select('ul.rank_top1000_list')
        items = soup.select('ul.rank_top1000_list > li')
        
        for idx, item in enumerate(items):
            keyword = item.find('a', attrs={'class':'link_text'}).get_text()
            keyword = keyword.strip()
            keyword = keyword.replace('\n','')
            keyword = re.sub(r"[0-9]", "", keyword)
            pastKeywordList.append(keyword)
            
        btnNext = driver.find_element(By.XPATH,'/html/body/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/div/div/div[2]/div/a[2]').click()
        time.sleep(0.5)
    
    return(pastKeywordList)