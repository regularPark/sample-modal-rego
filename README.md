# MyModal 라이브러리

간단한 모달을 구현할 수 있는 라이브러리입니다.

## 설치 방법

```
npm install woowacourse-sample-modal-rego
```

**해당 라이브러리는 `styled-components`, `@types/styled-components`를 이용합니다.**

## 사용 방법

```
import { RegoModal } from 'woowacourse-sample-modal
```

## MyModal 사용하기

```typescript
<RegoModal trigger={<button>Open</button>}>
  <h1>title</h1>
  <p>content</p>
</RegoModal>
```

## Props

```typescript
type Props = {
  trigger: React.ReactElement;
  children?: React.ReactNode;
};
```

## 사용 예시

```typescript
import { RegoModal } from "woowacourse-sample-modal-rego";

function App() {
  return (
    <div>
      <RegoModal trigger={<button>열기</button>}>
        <h1>title</h1>
        <p>content</p>
      </RegoModal>
    </div>
  );
}
```
