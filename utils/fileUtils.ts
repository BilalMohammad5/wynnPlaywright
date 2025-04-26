import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parser';
import * as ExcelJS from 'exceljs';

export async function readJSON(filePath: string) {
  const absolutePath = path.resolve(filePath);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

export async function readCSV(filePath: string) {
  const absolutePath = path.resolve(filePath);
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(absolutePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  });
}

export async function readExcel(filePath: string) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  const rows = [];
  worksheet.eachRow({ includeEmpty: false }, (row) => {
    rows.push(row.values);
  });
  return rows;
}
