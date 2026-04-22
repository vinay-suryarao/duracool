const SHEET_NAME = 'Appointments'
const HEADERS = [
  'Timestamp',
  'Name',
  'Phone',
  'Car Model',
  'Product',
  'Preferred Date',
  'Preferred Time',
  'Message',
  'Submitted At (ISO)',
  'Source',
]

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_(SHEET_NAME)
    ensureHeaderRow_(sheet)
    const payload = e.parameter || {}

    const values = [
      new Date(),
      payload.name || '',
      payload.phone || '',
      payload.carModel || '',
      payload.product || '',
      payload.preferredDate || '',
      payload.preferredTime || '',
      payload.message || '',
      payload.submittedAt || '',
      payload.source || '',
    ]

    sheet.appendRow(values)

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Saved' }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: error && error.message ? error.message : 'Unknown error',
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function getOrCreateSheet_(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = spreadsheet.getSheetByName(name)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name)
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
  }

  return sheet
}

function ensureHeaderRow_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0]
  const normalizedFirstRow = firstRow.map((value) => String(value).trim())
  const hasAnyData = normalizedFirstRow.some((value) => value !== '')
  const isHeaderRow = HEADERS.every(
    (header, index) => normalizedFirstRow[index] === header,
  )

  if (isHeaderRow) {
    return
  }

  if (hasAnyData) {
    sheet.insertRowBefore(1)
  }

  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
}
