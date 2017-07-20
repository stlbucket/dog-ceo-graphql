# dog-ceo-graphql

Query the <a href="https://dog.ceo/">dog.ceo</a> api via graphql and node.

```$xslt
git clone https://github.com/stlbucket/dog-ceo-graphql.git
```

```$xslt
npm install
```

```$xslt
npm start
```

Point your browser at: <a href="http://localhost:4000/graphql">http://localhost:4000/graphql</a>

```$xslt
query {
  allBreeds {
   name
    randomImage
  }
}
```


```$xslt
query {
  breed (name: "akita") {
   name
    randomImage
  }
}
```