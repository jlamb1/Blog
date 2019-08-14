This is a styleguide for our markdown files.

## Frontmatter

Every post has "frontmatter" which is a set of yaml that provides metadata about a blog post to our blog engine. Front matter must be at the very top of the file, wrapped in 3 hyphens `---` 

```yml
---
title: Cutting our webpack build times in half 🕰
date: "2019-05-14T02:10:57.272Z"
author: "tparnell"
tags:
- webpack
- performance
- javascript
---
```

* **title**: `string` the title of the post **required**
* **date**:  `string in ISO 8601 format` the date of post authoring, **required**
* **author**: `string`, *optional*
  * The author's username must map to an author listed in [authors/authors.json](../authors/authors.json)
* **tags**: `string[]` lists tags a post is tagged to. In the UI of the blog these are pills at the foot of the post that let users find similar content. **required**
* **permalink**: `string` by default posts get a url of the directory they are in. The permalink fronmatter provides an alternative cannonical url for the post. *optional*
* **redirects**: `string[]` provides alternative urls that should redirect to the current post. This is useful when changing an existing post's url with the permalink key, and you wish to provide backward compatibility with the previous url. *optional* 

## Formatting

Posts should have no level 1 headings. This is because the level 1 heading is used for the title of the post itself.

```md
# This is a level one heading 😡

## This is a level two heading ✅

```

All headings should have a space between the last `#` character and the text.

```md

##bad 😡

## good ✅

```

Blockquotes containing code should always be deliniated with a language, so our syantax highlighter (coming soon) can colorize the code. 

````md

```
console.log('bad 😡)
```

```js
console.log('good ✅')
```

````
