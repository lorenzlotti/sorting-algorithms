# Implementação do Comb Sort em Python

# Encontra o próximo gap do atual
def getNextGap(gap):

  # Diminui o gap
	gap = (gap * 10)//13
	if gap < 1:
		return 1
	return gap

# Function to sort arr[] using Comb Sort
# Função para ordenar arr[] usando o Comb Sort
def combSort(arr):
	n = len(arr)

	# Inicializa o gap
	gap = n

  # Inicia a variável como verdadeira para garantir que o loop rode
	swapped = True

  # Mantém rodando enquanto o gap é maior que 1 e última iteração causou uma troca
	while gap !=1 or swapped == 1:

		# Encontra o próximo gap
		gap = getNextGap(gap)

    # Inicializa a variável como falsa para verificarmos se a troca ocorreu ou não
		swapped = False

    # Compara todos os elementos com o gap atual
		for i in range(0, n-gap):
			if arr[i] > arr[i + gap]:
				arr[i], arr[i + gap]=arr[i + gap], arr[i]
				swapped = True


# Código para teste
arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]
combSort(arr)

print ("Array ordenado:")
for i in range(len(arr)):
	print (arr[i],end=" ")


# This code is contributed by Mohit Kumra
