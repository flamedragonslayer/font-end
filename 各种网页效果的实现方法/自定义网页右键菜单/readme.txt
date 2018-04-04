注意!

使用preventDefault和stopPropagation时要在function的()中写上参数e
再用e去调用它们 ，如e.preventDefault()和e.stopPropagation()
否则会报错