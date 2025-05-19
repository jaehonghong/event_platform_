# 이벤트 보상 관리 플랫폼(Back End)

이 프로젝트는 넥슨 백엔드 괒[를 기반으로 한 이벤트/보상 관리 플랫폼입니다.

### 프로젝트 목표
 - 운영자는 이벤트 및 보상을 정의할 수 있다
 - 유저는 보상을 요첨
 - 시스템은 조건을 검증하고 보상을 자동 지급합니다.

### 기술 스택
- 언어: TypeScript
- 백엔드: NestJS (v10)
- 데이터베이스: MongoDB
- 인증: JWT
- 배포 및 실행: Docker, Docker Compose
- 아키텍처: MSA (Gateway / Auth / Event)

### 서비스 구성
1. Gateway Server
   - API 요청 진입점
   - 인증, 역할 검증 수행
   - 요청을 Auth / Event 서버로 프록시 라우팅
2. Auth Server
   - 회원가입 / 로그인
   - JWT 발급 / 인증
   - 역할: USER, OPERATOR, AUDITOR, ADMIN
3. Event Server
   - 이벤트 생성, 보상 등록
   - 유저 보상 요청 처리
   - 보상 요청 이력 확인

### 설치 및 실핼 방법
1. 도커로 실행
   docker-compose up --build
2. 서버 포트 정보
   - Gateway: 3000
   - Auth: 3001
   - Event: 3002
   - MongoDB: 27017

### 인증 구조
- 모든 요청은 JWT 토큰 기반 인증이 필요합니다.
- 토큰은 /auth/login을 통해 발급받아 Authorization: Bearer <token> 헤더에 포함해야 합니다.

### 주요 API 테스트 순서 (Thunder Client 사용)
1. 회원가입 (관리자 생성)
   POST /auth/signup
   {
     "email": "admin@example.com",
     "password": "123456"
   }
   이후 MongoDB에서 roles: ["ADMIN"]으로 수동 수정
2. 로그인 → JWT 토큰 발급
   POST /auth/login
   {
     "email": "admin@example.com",
     "password": "123456"
   }
3. 이벤트 생성 (관리자)
   POST /event/create
   Authorization: Bearer <token>
   {
     "name": "주말 출석 이벤트",
     "condition": "WEEKEND_LOGIN",
     "startDate": "2025-05-17T00:00:00.000Z",
     "endDate": "2025-05-31T23:59:59.999Z"
   }
4. 보상 등록 (관리자)
   POST /event/reward
   Authorization: Bearer <token>
   {
     "type": "COIN",
     "amount": 1000,
     "eventId": "이벤트 ID",
     "description": "1000코인 지급"
   }
5. 유저 회원가입 & 로그인
   MongoDB에서 roles: ["USER"]로 설정
6. 보상 요청 (유저)
   POST /event/reward-request/:eventId
   Authorization: Bearer <user token>
7. 보상 요청 이력 조회 (유저)
   GET /event/reward-request/me
   Authorization: Bearer <user token>
🧾 테스트된 시나리오 정리
- 관리자 계정 생성 및 로그인 → 이벤트 및 보상 생성 성공
- 유저 계정으로 로그인 → 보상 요청 성공 / 중복 요청 방지 확인
- JWT 인증 성공 → 인증 실패 시 401, 권한 부족 시 403 반환 확인
- 각 서버 로그 확인 완료
- MongoDB 연동 테스트 완료 (auth.users, event.events, event.rewardrequests)

### 디렉토리 구조
├── auth/           # 유저 관리 & 인증

├── event/          # 이벤트/보상 비즈니스 로직

├── gateway/        # 요청 진입점 & 인증/프록시

├── docker-compose.yml

└── README.md

### 기타 참고사항
- 모든 API 요청은 JWT 인증이 필수입니다.
- NestJS의 Passport 전략을 각 서버에 개별 적용했습니다.
- MongoDB 내 역할 필드는 수동으로 설정합니다 (ADMIN, USER 등).
- Docker 환경에서 mongo-express도 추가 가능함 (테스트용 GUI).
