# RegoModal 라이브러리

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```
npm install woowacourse-rego-modal
```

**해당 라이브러리는 `styled-components`, `@types/styled-components`를 이용합니다.**

## 사용 방법

```
import { RegoModal } from 'woowacourse-rego-modal'
```

## RegoModal 사용하기

Modal을 사용하기 위해서 필요한 세팅이 있습니다. 모달을 열고 닫는 함수를 만들어 주어야 합니다.`useState`를 사용하여 모달을 여닫는 것을 추천합니다.

### Modal 여닫기 위한 state 기본 세팅

```typescript
const [isModalOpen, setIsModalOpen] = useState(true);
```

### Modal 여닫는 함수 작성

```typescript
const closeModal = () => {
  setIsModalOpen(false);
};

const openModal = () => {
  setIsModalOpen(true);
};
```

## 사용 예시

```typescript
import { RegoModal } from "woowacourse-rego-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <RegoModal isModalOpen={isModalOpen} closeModal={closeModal}>
      {<h1>Title</h1>}
    </RegoModal>
  );
}
```
