##Sample Array: 
[8,4,23,42,16,15]

### Pass 1
i = 1    j = 0   temp = 4
temp is less than arr[j] so they swap positions and we move to the next pass becuase there are no other numbers to go through

- Current array: [4, 8, 23, 42, 16, 15]

### Pass 2
i = 1    j = 0   temp = 23
temp is greater than arr[j] so everything stays the same

- Current array: [4, 8, 23, 42, 16, 15]

### Pass 3
i = 1    j = 0   temp = 42
same as pass 2, temp is greater than arr[j]

- Current array: [4, 8, 23, 42, 16, 15]


### Pass 4
i = 1    j = 0   temp = 16
temp is less than arr[j], so they swap and temp makes its way down two indexes in the while loop until it is no longer smaller than the previous index

- Current array: [4, 8, 16, 23, 42, 15]

### Pass 5
i = 1    j = 0   temp = 15
temp is smaller than arr[j] so again they swap and temp continues to make its way down the array until it is sandwiched between 8 and 16. 

- Final array [4, 8, 15, 16, 23, 42]



