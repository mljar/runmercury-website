# RunMercury.com website

It is a website for RunMercury.com. It has documentation for [Mercury](https://github.com/mljar/mercury) framework.

The documentation was created with [Nextra framework](https://nextra.site).

## Local setup

```
yarn install
yarn next
```

## Deploy

```
yarn next build && yarn next export
aws s3 sync out/ s3://runmercury.com
```

