# print('Hello world')

# camaco = 3
# samaso = 4

#result = camaco + samaso
# print(result)
def maioridade():
    estudante = input('Digite o nome do estudante')
    idade = int(input('Digite sua idade'))

    def superteste():
        if idade >= 18:
            print('Parabéns %s,você faz parte do grupo da maior idade' %estudante)
        else:
            print('Perdão %s, você não faz parte da maior idade...' %estudante)\

def supercalculo():
    number1 = int(input('Digite o primeiro número da soma: '))
    number2 = int(input('Digite o segundo número da soma: '))
    add = number1 + number2

    if number1 == 10000 and number2 == 10000:
        print(8)
    else:
        print(add)

print(supercalculo())