# Spotify Mobile

## Start
```
yarn install
yarn start
```

## Eslint & TSC hacks
```
// 1. no tsc for whole file - bad - don't do it foo
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// 2. no tsc for the next line
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

// 3. if you have to use any; ideally you type everything you can
// eslint-disable-next-line @typescript-eslint/no-explicit-any
```

## FC<Props>
```
type Props = {
  imgSource: ImageSourcePropType
}
const Card: FC<Props> = ({ imgSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
```