# Markdown 标题语法
要创建标题，请在单词或短语前面添加井号 (#) 。# 的数量代表了标题的级别。例如，添加三个 # 表示创建一个三级标题 (```<h3>```) (例如：```### My Header```)。


# Markdown 段落
要创建段落，请使用空白行将一行或多行文本进行分隔。

Markdown语法:
```
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```
HTML:
```
<p>I really like using Markdown.</p>

<p>I think I'll use it to format all of my documents from now on.</p>
```
效果:  
I really like using Markdown.

I think I'll use it to format all of my documents from now on.


# Markdown 换行语法  
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行(```<br>```)。

Markdown语法:
```
This is the first line.  
And this is the second line.
```
HTML:
```
<p>This is the first line.<br>
And this is the second line.</p>
```
效果:  
This is the first line.  
And this is the second line.  

# Markdown 强调语法  
通过将文本设置为粗体或斜体来强调其重要性。  
## 粗体（Bold）  
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

Markdown语法:  
```
I just love **bold text**.
```
```
I just love __bold text__.
```

HTML:  
```
I just love <strong>bold text</strong>.
```
```
I just love <strong>bold text</strong>.
```

效果:  
I just love **bold text**.  
I just love __bold text__.  

## 斜体（Italic）  
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。  

Markdown语法:  
```
Italicized text is the *cat's meow*.
```
```
Italicized text is the _cat’s meow_.
```

HTML:
```
Italicized text is the <em>cat's meow</em>.
```
```
Italicized text is the <em>cat's meow</em>.
```

效果:  
Italicized text is the *cat's meow*.
Italicized text is the _cat’s meow._  

## 粗体（Bold）和斜体（Italic）
要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。
Markdown语法:
```
This text is ***really important***.
```
```
This text is ___really important___.
```

HTML:
```
This text is <strong><em>really important</em></strong>.
```
```
This text is <strong><em>really important</em></strong>.
```

效果:  
This text is ***really important***.
This text is ___really important___.

# Markdown 链接语法
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。

超链接Markdown语法代码：```[超链接显示名](超链接地址 "超链接title")```

对应的HTML代码：
```
<a href="超链接地址" title="超链接title">超链接显示名</a>
```

Markdown:  
```
这是一个链接 [Markdown语法](https://markdown.com.cn)。
```
效果：  
这是一个链接 [Markdown语法](https://markdown.com.cn)。
## 给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
Markdown:  
```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```
渲染效果如下：  
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。

## 网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。
Markdown:
```
<https://markdown.com.cn>
<fake@example.com>
```
效果：
<https://markdown.com.cn>
<fake@example.com>

# Markdown 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 \ 。  
Markdown:  
```\* Without the backslash, this would be a bullet in an unordered list.```  
效果：  
\* Without the backslash, this would be a bullet in an unordered list.

## 可做转义的字符
以下列出的字符都可以通过使用反斜杠字符从而达到转义目的。

1. \\	        backslash
2. \`	        backtick (see also escaping backticks in code)
3. \*	        asterisk
4. \_	        underscore
5. \{ \}	    curly braces
6. \[ \]	    brackets
7. \( \)	    parentheses
8. \#	        pound sign
9. \+	        plus sign
10. \-	        minus sign (hyphen)
11. \.	        dot
12. \!	        exclamation mark
13. \|	        pipe (see also escaping pipe in tables)

