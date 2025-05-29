from random import choice, shuffle, randint
from string import ascii_lowercase, ascii_uppercase, digits, punctuation

def random_choice(lst: list[str]) -> str:
    return choice(lst)

def shuffle_list(lst: list[[str]]) -> list[str]:
    shuffle(lst)
    return lst

def random_num_in_range(start: int, stop: int) -> int:
    return randint(start, stop)

def password() -> str:
    password = ""
    symbols = ascii_uppercase + ascii_lowercase + digits + punctuation

    while len(password) <= 15:
        password += choice(symbols)
    return password

a = password()
print(a)


