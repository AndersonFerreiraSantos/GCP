import os
import openpyxl
import tkinter as tk
from tkinter import Label, Entry, Button, messagebox

def createExcel(filename, data):
    workbook = openpyxl.Workbook()
    sheet = workbook.active

    for row in data:
        sheet.append(row)

    workbook.save(filename)

def listClients(path, localFile, url):
    try:
        paths = os.listdir(path)
        data_list = [["LocalFile", 'PatientName', 'Url']]

        for client in paths:
            if client != '.DS_Store':
                if os.path.isdir(os.path.join(path, client)):
                    images = getImages(os.path.join(path, client))

                    for image in images:
                        data_list.append([localFile, client, url + client + '/' + image])
        return data_list

    except FileNotFoundError:
        print(f"'{path}' not found.")
        return []
    except PermissionError:
        print(f"Permission error: '{path}'.")
        return []

def getImages(path):
    paths = os.listdir(path)
    images_list = []

    for client in paths:
        if os.path.isdir(os.path.join(path, client)):
            print('is dir')
        else:
            images_list.append(client)

    return images_list

def generateExcelFile(path, localFile, url, fileName):
    print(localFile)
    data = listClients(path, localFile, url)
    if data:
        createExcel(fileName, data)
        messagebox.showinfo("Success", "Excel file generated successfully.")
    else:
        messagebox.showerror("Error", "Unable to generate Excel file.")

class ExcelGeneratorApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Excel Generator")
        
       
        self.path_entry = Entry(master, width=50)

        Label(master, text="Path:").grid(row=4, column=0, padx=5, pady=5)
        Label(master, text="Local File:").grid(row=1, column=0, padx=5, pady=5)
        Label(master, text="URL:").grid(row=2, column=0, padx=5, pady=5)
        Label(master, text="File Name:").grid(row=3, column=0, padx=5, pady=5)
        Label(master, text="Clínica:").grid(row=0, column=0, padx=5, pady=5)

        self.clinic = Entry(master)
        self.path_entry = Entry(master)
        self.local_file_entry = Entry(master)
        self.url_entry = Entry(master)
        self.file_name_entry = Entry(master)

        path = "C:\server"
        file = ""
        url = "http://34.121.171.80/"
        fileName = "excel.xlsx"
        
        self.clinic.insert(0, "")
        self.clinic.grid(row=0, column=1, padx=5, pady=5)

        self.path_entry.insert(4, path)
        self.path_entry.grid(row=4, column=1, padx=5, pady=5)

        self.local_file_entry.insert(1, file)
        self.local_file_entry.grid(row=1, column=1, padx=5, pady=5)

        self.url_entry.insert(2, url)
        self.url_entry.grid(row=2, column=1, padx=5, pady=5)

        self.file_name_entry.insert(3, fileName)
        self.file_name_entry.grid(row=3, column=1, padx=5, pady=5)

        Button(master, text="Generate Excel", command=self.generate_excel).grid(row=5, column=0, columnspan=2, pady=10)

    def generate_excel(self):
        path = self.path_entry.get()+ "\\" + self.clinic.get()
        local_file = self.local_file_entry.get() 
        url = self.url_entry.get()
        file_name = self.file_name_entry.get()

        generateExcelFile(path, local_file, url, file_name)

if __name__ == "__main__":
    root = tk.Tk()
    app = ExcelGeneratorApp(root)
    root.mainloop()
