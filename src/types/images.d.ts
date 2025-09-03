// ts는 png 못 읽어서 이거 써줘야 한대.
declare module '*.png' {
    const content: import('react-native').ImageSourcePropType;
    export default content;
}
