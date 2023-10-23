DOM - Document Object Model

Code -> Generates a html Document (DOM) -> makes the webpage

<html>
    <head>
     ***
     ***
    </head>
    <body>
     ***
     ***
     </body>
</html>

<abc>    //starting of abc-TAG
</abc>   //closing of abc-TAG

TAG:
    1.Tag names CANNOT have spaces
    2.Tag can have attributes
eg: html,head,body,script,input,a,button,form

<abc attr1="Value1" attr2="Value2" attr3 attr4="Value four">
Attributes of tag:
    1.Attribute names CANNOT have spaces
    2.Attributes may or may not have a value

tag->abc
attributes of abc-tag-> attr1, attr2, attr3, attr4
value of attr1 -> "Value1"
value of attr2 -> "Value2"
value of attr3 -> 
value of attr4 -> "Value four"

<abc attr1="Value1" attr2="Value2" attr3 attr4="Value four">   //starting of abc-tag
    <def attr11="value 11">  //starting of def-tag
        "123"                //text of def-tag
    </def>   //closing of def-tag
    <fgh attr21="value21" attr22="value22">  //starting of fgh-tag
        "xyz"                                //text of fgh-tag
    </fgh>   //closing of fgh-tag
</abc>