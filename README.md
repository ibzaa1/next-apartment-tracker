<h1>Next Booklist</h1>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```


## Table of Contents
- [Features](#features)
- [Example Code](#example-code)
- [Philosophy](#philosophy)

## Features
- __Clear Layout:__ The page has a clear layout of the page, there is a header, main content and footer. 
- __ Nice Styling:__ The styling of the page is consistant and matching, all buttons, cards etc have the same color pallette. 
- __Tailwind CSS:__ Pages med with Tailwind CSS which make it super easy to style code.
- __Next JS:__ Made with Next JS which is a framework on top of react which like Tailwind CSS makes it so much easier to write code.

## Example Code
```jsx
<div className='grid grid-rows-3 grid-cols-3 justify-center m-4 pt-3'>
        {displayApartments.map((apartment) => (
          <div className='p-2' key={apartment.picture}>
            <Card>
              <div className='pt-7 pb-5 text-center'>
                <Image
                  src={`https://source.unsplash.com/${apartment.picture}`}
                  width={150}
                  height={150}
                />
                <p>Rent Price: €{apartment.rent}</p>
                <p>Apartment Size: {apartment.size} (sqm)</p>
                <p>Apartment Location: {apartment.location}</p>
                <Favorite></Favorite>
              </div>
            </Card>
          </div>
        ))}
      </div>
```


## Philosophy
I beleive progamming and coding should be available for everyone as it is awesome with what you can do with it. 
From creating games, to developing websites, programming has a world of its own. I truly beleive that each and
every single one of us has their own place in programming, even if it just to get the basics out of the way.
Not to mention, learning code will allow you to access all types of careers, no matter which industry. A basic 
example is the finance and bankig industry. You may think, how does programming have anythig to do with them, but
if you notice, most of the time, that accountants behind the till use a computer to store most of their data, how 
think that was create - with programming. This is a basic and simple idea of where programming is used anywhere and
everywhere! 
