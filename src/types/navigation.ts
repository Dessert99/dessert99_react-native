//각 페이지 네비게이션 타입 정의

export type HospitalStackParamList = {
    HospitalHome: undefined; //undefined를 지정하면 해당 라우트에 파라미터가 없음을 뜻
};

export type DrugStackParamList = {
    DrugHome: undefined;
};

export type TodayStackParamList = {
    TodayHome: undefined;
    Post: { userName: string };
};

export type MyStackParamList = {
    MyHome: undefined;
};
