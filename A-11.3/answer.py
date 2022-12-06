
def solution(arr, n):

    for i in range(n):
        right = [0] * n
        left = [0] * n
        result = 0

        left[0] = arr[0]
        for i in range(1, n):
            left[i] = max(left[i-1], arr[i])

        right[n-1] = arr[n-1]
        for i in range(n-2, -1, -1):
            right[i] = max(right[i+1], arr[i])
        
        for i in range(n):
            result += min(right[i], left[i]) - arr[i]
        
    return result
    


height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
n = len(height)

print(solution(height, n))