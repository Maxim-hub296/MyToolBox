from hashlib import sha256

def string_analyses(string: str) -> list[str]:
    """Считает гласные/согласные, количество слов, длину всей строки"""
    vowels = "aeouiyаоуиэыяюеё"
    vowels_cnt = 0
    consonants_cnt = 0
    for i in string.lower():
        if i in vowels:
            vowels_cnt += 1
        else:
            consonants_cnt += 1

    string_length = f"Длина строки: {len(string)}"
    words_cnt = f"Количество слов: {len(string.split())}"
    vowels_res = f"Количество гласных: {vowels_cnt}"
    consonants_res = f"Количество согласных: {consonants_cnt}"
    return [string_length, words_cnt, vowels_res, consonants_res]

def convert_register(string:str, choice: str) -> str:
    """Конвертирует строку в другой регистр"""
    convertor = {"low": string.lower(),
                 "up": string.upper(),
                 "capitalize": string.capitalize()}

    return convertor[choice]

def strip_spaces(string: str) -> str:
    """Удаляет пробелы с обоих сторон"""
    return string.strip()


def hash_string(string: str) -> str:
    """Хэширует строку по SHA256"""
    return sha256(string.encode()).hexdigest()
