def to_roman(num):
    output = ""
    roman_Num = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC': 90,
        'L' : 50,
        'XL' :40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1,
    }

    for key in roman_Num:
        while num/roman_Num[key] >= 1:
            output += key
            num -= roman_Num[key]
    return output