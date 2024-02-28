# RunMercury.com website

It is a website for RunMercury.com. It has documentation for [Mercury](https://github.com/mljar/mercury) framework.

The documentation was created with [Nextra framework](https://nextra.site).

## Local setup

```
npm install
npm run dev
```

## Deploy

```
npm run build
aws s3 sync out/ s3://runmercury.com
```

Clear all files
```
aws s3 rm --recursive s3://runmercury.com
```


