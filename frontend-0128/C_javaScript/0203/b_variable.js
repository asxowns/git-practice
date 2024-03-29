/*
! 변수(variable)
  : 변하는 수 (값이 달라질 수 있는 데이터)
  : ex) 나이, 연도, 키 등

  : 데이터를 저장하기 위한 '공간'
  : 프로그래밍에서 데이터를 사용하기 위해 생성하는 그릇
  : >> 해당 그릇에 이름(변수명)

  1. 변수 선언
  : 변수를 사용하기 위해 변수를 다른 변수들과 구별하는 이름을 붙여 주는 것
  >> 값을 저장할 컴퓨터의 메모리 공간에 이름을 붙이는 것

  2. 변수명 명명규칙
  - 첫 글자: 영문자, 언더스코어(_), 달러($)만 사용 가능 (이후 숫자 사용가능)
  - 띄어쓰기 허용 X
  - 기호는 언더스코어, 달러만 사용 가능
  - 영어 대소문자 구별 now와 Now는 다른 변수
  - 예약어 사용 X

  >> lowerCamelCase 사용
    : 이어지는 단어의 시작을 대문자로 시작
    : 변수명의 시작은 소문자로 시작
    (lower - 소문자, upper - 대문자)

  >> 이름을 의미있게 작성
    : pw >> password, btn >> button
  
  변수명 예시
  올해 연도: currentYear
  태어난 연도: birthYear
  나이: age = currentYear - birthYear;

! 자바스크립트의 변수 선언
: 3가지 키워드(var, let, const)

? 변수 선언과 초기화
변수종류 변수명; // 변수 선언 (그릇 생성)
변수명 = 값; // 변수에 값을 할당 (그릇에 데이터를 삽입)
>> 변수종류 변수명 = 값;

* 1. 변수의 종류
- var
: 함수 스코프 변수를 선언
: 호이스팅 가능
: 동일한 변수명으로 여러번 선언 가능

- let
: 블록 스코프 변수를 선언
: 호이스팅 가능(초기화되지 않은 상태에서 접근하면 오류)
: 동일한 스코프 내에서 같은 이름으로 재선언 불가

* 2. 상수의 종류
상수
: 변하지 않는 수 (한 번 할당된 값을 변경할 수 X)
: 반드시 선언과 동시에 초기화가 이루어져야 함

- const
: 블록 스코프 상수를 선언
: 호이스팅 가능(초기화되지 않은 상태에서 접근하면 오류)
: 동일한 스코프 내에서 같은 이름으로 재선언 불가
*/

// ! 호이스팅
// : 변수의 선언을 코드의 최상단으로 끌어올리는 것
// : 실제로 코드가 재배치 X, JS의 엔진이 코드를 실행하기 전에 변수의 선언을 메모리에 저장

// ! 스코프(scope)
// : 변수가 접근할 수 있는 범위를 지정
// : JS의 스코프 - 전역, 함수, 블록
// 전역 스코프: 코드의 모든 부분에서 접근 가능
// 함수 스코프: 함수 내부에서만 접근 가능 (var)
// 블록 스코프: {}로 묶인 블록 내부에서만 접근 가능 (let, const)

// ? var
// var x;
console.log(x); // undefined - 정의되지 않음
var x = 5;
console.log(x); // 5
var x = 6;
console.log(x);

// ? let
// let = y;
// >> 해당 생략된 변수는 TDZ(일시적 사각지대, Temporal Dead Zone)에 의해 접근이 제한
// let과 const로 선언된 변수는 선언문에 도달하고 초기화 될 때까지 TDZ에 존재

// console.log(y); - Error
let y = 3; // 변수 선언 및 초기화
console.log(y);
// let y = 4; - Error 재선언 불가
y = 4; // 재할당 가능
console.log(y);

/*
! 상수(constant)
: 한번 할당된 값을 변경할 수 X
: 선언과 동시에 할당이 반드시 이루어져야 함(초기화)
: 주로 과학적 공식에서 사용하는 숫자값

? 상수 명명규칙
- 변수의 명명규칙과 동일하지만, UPPER_SNAKE_CASE를 사용
  : 모든 영문자를 대문자로 작성
  : 이어지는 단어는 _(언더스코어)로 구분
*/

const PI = 3.14159;
const MY_CONSTANT = '안녕';
// const MY_CONSTANT = '반갑습니다'; - Error (재선언 불가)

// MY_CONSTANT = '반갑습니다'; - Error (재할당 불가)