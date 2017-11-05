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

Consider this code snippet
```py
def find():
    import re
    string1 = 'SitaRam'
    if re.search ('Ram$', string1):
        print "String found"
    else:
        print "No match"
```
