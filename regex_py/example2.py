def find():
    import re
    samplestr = 'voot'
    if re.search('[ram]', samplestr):
        print "match found"
    else:
        print "match not found"


find()
