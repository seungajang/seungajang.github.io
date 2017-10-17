# 웹접근성 향상을 위한 웹표준 프로젝트 실무
## 1일차
### 웹 접근성의 개요
> 누구나 신체적 환경적 조건에 관계없이 웹이 접근하여 이용할 수 있도록 보장하는 것
#### 신체적 조건
+ 시각장애
+ 청각장애
+ 상지장애
+ 기타 신체가 불편한 경우
#### 환경적 조건
+ 다양한 플랫폼
+ 저사향 및 저속 환경
+ SEO
+ 크로스 브라우징

### 웹표준
[W3C][http://w3.org] 
#### 구조언어(HTML)
```
<!DOCTYPE html>
<html lang="KO">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>웹카페 - 웹접근성, 웹표준</title>
</head>

<body>

</body>

</html>
```


## 2일차
### WAI-ARIA

####WAI-ARIA의 목적
>WAI-ARIA는 스크린리더 및 보조기기 등에서 접근성 및 상호 운용성을 향상시키기 위해 마크업에 역할(Role), 속성(Property), 상태(State) 정보를 추가할 수 있도록 지원하는 것
>ARIA 속성들은 정보통신 보조기기를 사용하는 사용자를 위한 것 (접근성 API)

#### ARIA Role과 HTML5 섹션 관련 요소 비교
+ role=“application”(div)
+ role=“banner”(header)
+ role=“navigation”(nav)
+ role=“main”(main, article, aside)
+ role=“complementary”(aside)
+ role=“form”(form)
+ role=“search”(div, form)
+ role=“contentinfo”(footer)