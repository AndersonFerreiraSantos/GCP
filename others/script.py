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

            if os.path.isdir(path + '/' + client):
                images = getImages(path + '/' + client)
                print(images)
            # else:
            #     return print('Documento sem nome de client')

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
            list.append(client)
        return list

def generateExcelFile():

    data = listClients('/users/anderson/Documents/GCP/testNgrok/ETL', "Person.Photo", "https://pe6elu-ip-186-235-59-97.tunnelmole.net/ETL/")
    createExcel("test.xlsx", data)

generateExcelFile()