# Function Description

Looking at an array, see if the elements of an array are anagrams of a given input

Return an empty array if no anagrams exist.

Words are considered anagrams if they use the same characters (and only those characters) as one another.


anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []