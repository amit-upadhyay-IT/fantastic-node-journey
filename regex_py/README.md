# Regular Expression & Pattern matching

A regular expression is a sequence of letters and some special characters (also called meta characters). It is primarily used for string searching and manipulation. These special characters have symbolic meaning.

The sequence formed by using meta characters and letters can be used to represent a group of patterns.

### Example:
`
str = "Ram$"
`
- The pattern `Ram$` is known as RE. The expression has `$` as the meta character.
- Meta character `$` is used to match the given regular expression at the end of the string.
- So, the regular expression would match the string `SitaRam` or `HeyRam` but will not match the string `Raman`.

Consider this code snippet written in python
```py
def find():
    import re
    string1 = 'SitaRam'
    if re.search ('Ram$', string1): #search is function avaliable in re module which returns the match object.
        print "String found"
    else:
        print "No match"
```

Regular expression can be used in python for matching a particular pattern by importing the `re` module. The `re` module includes functions for working on regular expressions. The functions are not much important but what's important is the meta characters.

### Some more meta characters

- [  ]: used to match a set of characters.

`[ram]` this regular expression would match any of the characters r, a, or m in the string, if any one of them is found the search function would return a proper match object.

`[a.z]`, this regular expression would match only lowercase characters.
