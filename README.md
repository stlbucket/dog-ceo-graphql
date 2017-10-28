# dog-ceo-graphql

Query the <a href="https://dog.ceo/">dog.ceo</a> api via graphql and node.

## Installation

```$xslt
git clone https://github.com/stlbucket/dog-ceo-graphql.git
```

```$xslt
npm install
```

```$xslt
npm start
```

points your browser at: <a href="http://localhost:4000/graphql">http://localhost:4000/graphql</a>

```$xslt
npm start 4002
```
points your browser at custom port e.g. 4002: http://localhost:4002/graphql

## Usage

```$xslt
query {
  allBreeds {
   name
   randomImage
   allSubBreeds {
     name
     randomImage
   }
  }
}
```


```$xslt
query {
  breed (name: "hound") {
   name
    randomImage
    subBreed(name: "Ibizan") {
      name,
      allImages
    }
 }
}
```