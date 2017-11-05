def find():
    import re
    string1 = 'SitaRam'
    if re.search ('Ram$', string1):
        print "String found"
    else:
        print "No match"


find()
