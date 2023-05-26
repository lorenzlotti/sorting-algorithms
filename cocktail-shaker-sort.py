# Implementação do Cocktail Sort em Python

def cocktailSort(a):
	n = len(a)
	swapped = True
	start = 0
	end = n-1
	while (swapped == True):

    #reseta a variável para falso ao entrar no loop, pois pode ter continuado verdadeiro por uma iteração anterior
		swapped = False

		# loop da esquerda pra direita igual ao bubble sort
		for i in range(start, end):
			if (a[i] > a[i + 1]):
				a[i], a[i + 1] = a[i + 1], a[i]
				swapped = True

		# se nada se moveu, o array é ordenado.
		if (swapped == False):
			break

    # senão, resete novamente a variável para ser usada no próximo estágio
		swapped = False
		
    # move o end point um para trás, pois o item no final ficou na posição correta
		end = end-1

    # da direita para esquerda, fazendo a mesma comparação como no estágio anterior
		for i in range(end-1, start-1, -1):
			if (a[i] > a[i + 1]):
				a[i], a[i + 1] = a[i + 1], a[i]
				swapped = True

    # aumenta o ponto de inicio, pois o último estágio teria movido o próximo menor numero para sua posição correta.
		start = start + 1

# Código para teste
a = [5, 1, 4, 2, 8, 0, 2]
cocktailSort(a)
print("O array ordenado fica:")
for i in range(len(a)):
	print("% d" % a[i])
