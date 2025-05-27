# UI PROJECT TEAM 7

## directory 구조

```bash
├── public
│   ├── font
│   └── vite.svg
├── src
│   ├── reset.css
│   ├── global.css
│   └── components
│   	└── component-name
│   		└── index.html
│   		└── style.css
│   └── page-name
│   	├── style.css
│   	└── index.html
└── index.html
```

-   public: build될 필요 없는 정적 파일
-   reset.css: style 초기화
-   global.css: 커스텀 속성 선언. reset.css를 가져옴
-   components: 재사용 가능한 컴포넌트들

    -   특정 페이지에서 컴포넌트 A 사용 시

        -   `/src/page-name/style.css`: `/src/components/component-a/style.css` 파일을 import
            ```css
            @import '/src/components/component-a/style.css';
            ```
        -   `/src/page-name/index.html`: `/src/components/component-a/index.html` 내에 html 요소만을 copy/paste하여 사용한다

-   page-name: 페이지별 index.html, style.css를 그룹화한다. **항상 global.css를 import한다.**
    ```css
    @import '../global.css';
    ```

## coding convention

### GIT 커밋 메시지 컨벤션

| 머릿말    | 설명                                             |
| --------- | ------------------------------------------------ |
| Init:     | 프로젝트 초기 생성                               |
| Feat:     | 새로운 기능 추가                                 |
| Refactor: | 리팩토링                                         |
| BugFix:   | 버그 수정                                        |
| Docs:     | 문서의 수정(README.md)                           |
| Design:   | CSS 등 사용자 UI 디자인 변경                     |
| Comment:  | 필요한 주석 추가 및 변경                         |
| Build:    | 빌드 수정                                        |
| Assets:   | 정적 에셋 설정(assets image)                     |
| Rename:   | 파일 혹은 폴더명 수정하거나 옮기는 경우          |
| Remove:   | 파일을 삭제하는 작업만 수행하는 경우             |
| Merge:    | Pull 과정 중 현재 commit과 자동 병합이 일어날 때 |
| Package:  | 새로운 라이브러리 혹은 패키지 설치               |

![이미지](https://wholesale-snipe-50a.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F2c9b0f24-8e73-4514-b0c2-312f3d7d31f4%2F2d520183-dab0-4411-8c9c-eba2ca836baf%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-12-12_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_2.59.53.png?table=block&id=30b748ff-9107-4b73-9c15-afc801aa44d9&spaceId=2c9b0f24-8e73-4514-b0c2-312f3d7d31f4&width=1420&userId=&cache=v)

### GIT 브랜치 전력

PR은 나머지 팀원 3명의 approval이 있어야 머지 가능하며, resolve되지 않는 conversation이 있다면 머지가 불가능하다.

```bash
main
└── release
└── develop
	└── feature branch(feat, refactor, fix, etc..)
```

-   main: Netlify로 배포하는 브랜치로, push 불가하며 실제 서비스에 해당
-   release: 배포 전 잘 작동하는지 확인하는 브랜치
-   develop: default/root 브랜치로, 모든 기능 구현의 시작점이다. push 불가
-   feature branch: 기능 구현을 위한 브랜치
    -   feat/페이지이름 혹은 기능
    -   refactor/개선사항
    -   fix/버그수정사항
    -   style/스타일변경
    -   etc...

### HTML, CSS

-   class, id 이름은 케밥 케이스로 작성합니다.(my-class-name)
-   sr-only를 사용하여 스크린 리더가 잘 동작하도록 할 것
-   속성 작성 순서를 잘 지켜 작성할 것(Box Model 관련 속성 → 레이아웃 → 타이포 → 기타 순서)

    ✅ CSS 속성 정렬 순서 (카테고리별)

    1.  🧱 Box Model

    -   display
    -   position
    -   top, right, bottom, left
    -   z-index
    -   float, clear
    -   box-sizing
    -   width, min-width, max-width
    -   height, min-height, max-height
    -   margin, margin-\*
    -   padding, padding-\*
    -   overflow, overflow-x, overflow-y

    2.  🎨 Layout & Flex/Grid

    -   flex, flex-grow, flex-shrink, flex-basis
    -   flex-direction, flex-wrap
    -   justify-content, align-items, align-self
    -   gap, row-gap, column-gap
    -   grid-template, grid-template-rows, grid-template-columns
    -   grid-row, grid-column, place-items, place-content

    3.  ✍️ Typography

    -   font, font-family, font-size, font-weight, font-style
    -   line-height
    -   letter-spacing, word-spacing
    -   text-align, text-decoration, text-transform
    -   white-space, vertical-align

    4.  🎨 Visual (Color & Background)

    -   color
    -   background, background-color, background-image, background-position, background-size, background-repeat, - background-attachment
    -   box-shadow
    -   opacity

    5.  🎨 Border & Outline

    -   border, border-width, border-style, border-color
    -   border-radius
    -   outline, outline-offset

    6.  ✨ Effects & Animation

    -   transition, transition-property, transition-duration, transition-timing-function, transition-delay
    -   transform
    -   animation, animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, - animation-fill-mode

    7.  🧩 Miscellaneous (기타)

    -   cursor
    -   pointer-events
    -   visibility
    -   content (주로 ::before, ::after에 사용)
    -   user-select
