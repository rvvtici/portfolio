tamanho = int(input("tamanho: "))

# rows = int(input("rows: "))
# col = int(input("columns: "))

matrix = [] 
# print("entries row-wise:")


for i in range(tamanho):   
    row = []
    for j in range(tamanho):
        # row.append(int(input()))    # user input for rows
        if (i == j):
            row.append("X")
        elif ((i+j) == (tamanho-1)):
            row.append("/")
        else:
            row.append(" ")
        
    matrix.append(row)  # adding rows to the matrix

print("\n2D matrix is:")

for i in range(tamanho):
    for j in range(tamanho):
        print(matrix[i][j], end=" ")
    print()





