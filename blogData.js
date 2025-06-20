const blogData = [
  {
    id: 1,
    title: '코딩 테스트 준비 전략',
    date: '2024-06-01',
    summary: '효율적인 코딩 테스트 준비법과 알고리즘 학습 루트를 소개합니다.',
    content: `# 코딩 테스트 준비 전략

코딩 테스트를 준비할 때 가장 중요한 것은 **문제 해결 능력**과 **시간 관리 능력**입니다.

## ✅ 공부 루트
1. 자료구조 복습: 스택, 큐, 해시, 트리, 그래프
2. 알고리즘 익히기: DFS/BFS, 정렬, 이분 탐색, 다이나믹 프로그래밍
3. 실전 모의고사: 백준, 프로그래머스, LeetCode 활용

## 💡 팁
- 하루 1~2문제씩 꾸준히
- 노션이나 블로그로 풀이 복기
- 시간 복잡도 계산 습관화`,
    thumbnail: 'images/blog-codingtest.jpg',
  },
  {
    id: 2,
    title: '머신러닝 입문자를 위한 가이드',
    date: '2024-05-20',
    summary: '머신러닝의 기본 개념부터 실습에 이르기까지의 입문 가이드를 제공합니다.',
    content: `# 머신러닝 입문 가이드

머신러닝은 데이터를 기반으로 패턴을 학습하여 예측하거나 분류하는 기술입니다.

## 📌 주요 개념
- 지도 학습 vs 비지도 학습
- 회귀(Regression), 분류(Classification)
- 모델 평가: 정확도, 정밀도, F1-score

## 🛠️ 실습 도구
- Scikit-learn
- Pandas, Numpy
- Jupyter Notebook

## 🧠 추천 학습 루트
1. 머신러닝 이론 정리
2. 간단한 데이터셋 실습 (Iris, Titanic 등)
3. 모델 튜닝과 성능 개선 경험`,
    thumbnail: 'images/blog-ml-guide.jpg',
  },
  {
    id: 3,
    title: '딥러닝 핵심 개념 완전 정복',
    date: '2024-05-10',
    summary: '딥러닝의 핵심 개념과 신경망 구조를 쉽게 설명합니다.',
    content: `# 딥러닝 핵심 개념

딥러닝은 인공신경망(ANN)을 기반으로 한 머신러닝의 하위 분야입니다.

## 🧱 기본 구조
- Input Layer
- Hidden Layer (ReLU, Dropout 등)
- Output Layer (Softmax 등)

## 🔧 주요 프레임워크
- TensorFlow
- PyTorch

## 📊 실제 예제
- MNIST 숫자 분류
- CIFAR 이미지 분류

딥러닝은 GPU 자원이 중요하며, 데이터 전처리와 모델 구조 설계가 핵심입니다.`,
    thumbnail: 'images/blog-deeplearning.jpg',
  },
  {
    id: 4,
    title: '미적분, 개발자에게 왜 중요할까?',
    date: '2024-04-30',
    summary: '미적분이 프로그래밍과 컴퓨터 과학에 어떻게 활용되는지를 소개합니다.',
    content: `# 미적분과 개발

미적분은 변화율과 누적량을 다루는 수학 분야로, 특히 물리 시뮬레이션, 머신러닝, 게임 개발 등에서 자주 사용됩니다.

## 📌 주요 활용
- 그래디언트 계산 (딥러닝 학습)
- 곡선의 면적 계산 (적분)
- 실시간 움직임 예측 (속도, 가속도 계산)

## 예시
신경망 학습에서 손실 함수의 최소화를 위해 **미분(Gradient Descent)**을 사용합니다.`,
    thumbnail: 'images/blog-calculus.jpg',
  },
  {
    id: 5,
    title: '선형대수학과 인공지능',
    date: '2024-04-18',
    summary: '벡터, 행렬, 고유값 개념이 딥러닝과 어떻게 연결되는지 설명합니다.',
    content: `# 선형대수와 AI

선형대수학은 머신러닝과 딥러닝 모델의 수학적 기반이 되는 분야입니다.

## 🔢 필수 개념
- 벡터와 행렬 연산
- 선형 변환과 행렬 곱
- 고유값 분해 (Eigen Decomposition)

## 📈 적용 예시
- 신경망 연산에서 입력과 가중치의 행렬 곱 사용
- PCA (주성분 분석)를 통한 차원 축소

개발자라면 최소한의 선형대수학 개념은 이해하고 있어야 실전에서 유리합니다.`,
    thumbnail: 'images/blog-linear-algebra.jpg',
  },
  {
    id: 6,
    title: '확률과 통계의 개발 활용',
    date: '2024-04-10',
    summary: '확률과 통계는 데이터 기반 개발에서 필수 도구입니다.',
    content: `# 확률과 통계의 개발 응용

데이터 분석, A/B 테스트, 추천 시스템, 머신러닝 모델링 등 다양한 분야에서 확률과 통계가 사용됩니다.

## 💡 핵심 개념
- 평균, 분산, 표준편차
- 확률 분포 (정규분포, 이항분포 등)
- 베이즈 정리

## 📈 활용 사례
- 모델 성능 평가 (ROC Curve, 신뢰 구간)
- 사용자 행동 예측
- 실험 설계와 가설 검정

통계를 이해하면 **데이터 기반 의사결정** 능력이 향상됩니다.`,
    thumbnail: 'images/blog-statistics.jpg',
  },
];
