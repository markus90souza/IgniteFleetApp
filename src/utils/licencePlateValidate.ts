const LICENSE_PLATE_REGEX = '[A-Z]{3}[0-9][0-9A-Z]{2}'

export const lincencePlateValidate = (plate: string) => {
  const licence = plate.toUpperCase()

  const isValidLincence = licence.match(LICENSE_PLATE_REGEX)

  return isValidLincence
}
