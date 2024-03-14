import os
import openpyxl

def createExcel(filename, data):
    workbook = openpyxl.Workbook()
    sheet = workbook.active

    for row in data:
        sheet.append(row)

    workbook.save(filename)

def listClients(path, localFile, url):
    try:
        paths = os.listdir(path)
        list = [["LocalFile", 'PatientName', 'Url']]

        for client in paths:
            if client != '.DS_Store':
                if os.path.isdir(path + '/' + client):
                    images = getImages(path + '/' + client)

                for image in images:
                    list.append([localFile, client, url + client + '/' + image])
        return list

    except FileNotFoundError:
        print(f"'{path}'not found.")
    except PermissionError:
        print(f"Permission '{path}'.")


def getImages(path):
        paths = os.listdir(path)
        list = []

        for client in paths:
            if os.path.isdir(path + '/' + client):
                print('is dir')
            else:
                list.append(client)
            
        return list

def generateExcelFile():
    path = '/Users/anderson/Desktop'
    localFile = "Person.Photo"
    url = "https://rwmmvi-ip-131-100-95-161.tunnelmole.net/"
    fileName = "dataImport.xlsx"

    data = listClients(path, localFile, url)
    createExcel(fileName, data)

generateExcelFile()

#