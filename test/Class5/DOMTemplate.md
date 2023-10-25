<tag1 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
    <tag2 id="abcd" data-text-id="unique data" attr3="value3" attr4="value4">
        <subtag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subtag>
        <tag3>Not Unique Text
            <subtag attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 1</subtag>
        </tag3>
        <tag11 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 2</tag11>
        <tag21 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 3</tag21>
        <tag31 attr1="value1" attr2="value2" attr3="value3" attr4="value4">Unique Text 4</tag31>
    </tag2>
    <tag4 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
            <a attr1="value1" attr2="value2">Unique Text 4</a>
    </tag4>
    <tag6 attr1="value1" attr2="value2" attr3="value3" attr4="value4">
        <tag7 attr1="value1" attr2="value2" attr3="value3" attr4="value4"></tag7>
    </tag6>
</tag1>



parent-tag
    tag2 is the parent of subtag,tag3,tag11,tag21,tag31
    tag1 is the parent of tag2,tag4,tag6
child-tag
    subtag is a child of tag2
    a-tag is the child of tag4
    tag4 is the child of tag1
sibling-tag
    subtag,tag3,tag11,tag21,tag31 are siblings (parent=tag2)
    tag6,tag4,tag2 are siblings (parent=tag1)

    following-sibling-tag (sibling starting-tags which appear in the dom after the tag)
        tag4 (2 siblings=tag2,tag6) only has 1 following sibling which is tag6
        tag6 has no following sibling
        tag2 has 2 following siblings tag2,tag6

    preceding-sibling-tag (sibling starting-tags which appear in the dom before the tag)
        tag4 has 1 preceding sibling which is tag2
        tag2 has no preceding siblings
        tag6 has 2 preceding siblings tag4,tag2

following-tag (all starting tags appear in the DOM after the tag)
    tag4 has 3 following-tags tag6,a,tag7
    tag6 has 1 following-tag tag7
    tag11 has 6 following tags tag21,tag31,tag4,a,tag6,tag7

preceding-tag (all starting tags appear in the DOM before the tag)
    tag11 has 5 preceding-tags subtag,tag3,subtag,tag2,tag1