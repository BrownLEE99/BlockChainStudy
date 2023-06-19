## 펫샵 튜토리얼 (Truffle을 이용한)

이 튜토리얼은 Truffle 프레임워크를 사용하여 펫샵 스마트 계약을 개발하고 배포하는 과정을 담고있습니다.

### 프로젝트 구조

```
- contracts/ : 스마트 계약의 솔리디티 소스 파일을 포함합니다.
- migrations/ : 스마트 계약 배포를 다루기 위한 마이그레이션 스크립트가 위치합니다.
- test/ : 스마트 계약의 자바스크립트 및 솔리디티 테스트 파일이 포함됩니다.
- truffle-config.js : Truffle 프로젝트의 구성 파일로, 네트워크 설정과 컴파일러 설정을 관리합니다.
```

### 주요 개념 및 키워드

- `pragma` : 컴파일러에게 추가 정보를 전달하는 지시어입니다.
- `Address` 타입 : 20바이트의 이더리움 주소를 나타내는 데이터 타입입니다.
- 함수 매개변수 및 반환 값 타입 : Solidity에서는 함수의 매개변수와 반환 값의 타입을 명시해야 합니다.
- `msg.sender` : 함수를 호출한 주체(사용자 또는 스마트 계약)의 주소를 나타냅니다.
- `address[16] memory` : `memory` 키워드를 사용하여 데이터를 실행 중에 임시로 저장하는 메모리 데이터 위치를 지정합니다.
- `view` : 상태를 변경하지 않고 계약 정보를 조회하는 함수를 나타냅니다.
- 컴파일 : Solidity 소스 코드를 EVM이 실행할 수 있는 바이트코드로 변환하는 과정입니다.
- 마이그레이션 : 스마트 계약 배포를 위한 스크립트로, 애플리케이션의 계약 상태를 변경합니다.

### 사용법

1. 저장소를 클론합니다.
2. Truffle 설치 및 프로젝트 의존성 설치를 위해 터미널에서 `npm install -g truffle` 명령어를 실행합니다.
3. 프로젝트 디렉토리로 이동한 후, `truffle unbox pet-shop` 명령어를 실행하여 기본 펫샵 튜토리얼 프로젝트 구조를 가져옵니다.
4. 스마트 계약을 개발하고 배포하기 전에, 솔리디티 소스 파일을 `contracts/` 디렉토리에 작성합니다.
5. 마이그레이션 스크립트를 `migrations/` 디렉토리에 작성하여 스마트 계약 배포를 관리합니다.
6. 테스트 파일을 `test/` 디렉토리에 작성하여 스마트 계약의 동작을 테스트합니다.
7. `truffle compile` 명령어로 솔리디티 소스 코드를 컴파일합니다.
8. `truffle migrate` 명령어로 스마트 계약을 배포합니다.
9. `truffle test` 명령어로 테스트 파일을 실행하여 스마트 계약의 동작을 검증합니다.


위의 내용은 Truffle 프레임워크를 사용하여 스마트 계약을 개발하고 배포하는 과정을 안내하는 펫샵 튜토리얼입니다. 자세한 내용은 프로젝트 내의 소스 코드와 Truffle 공식 문서를 참고해 주세요.

---
### 메타마스크와 연결하기
- 메타마스크를 실행한 뒤 계정 가져오기를 통해 가나시에서 제공하는 계정을 사용합니다.
- `lite-server`: 라이트 서버 라이브러리를 사용하여 확인할 수 있습니다.
- `bs-config.json`: baseDir : [웹사이트 파일, 컨트랙 artifacts]

![Alt text](image.png)
![Alt text](image-1.png)

**참고 자료:**
- [Truffle 공식 문서](https://www.trufflesuite.com/docs)