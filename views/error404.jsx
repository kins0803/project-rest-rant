const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src="/images/cute-dog.jpg" alt="Cute Dog"/>
                <div>
                    Photo by <a href="https://unsplash.com/@escape_your_mind?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael G</a> on <a href="https://unsplash.com/photos/vpnRelMxPHU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
          </main>
      </Def>
    )
  }  

module.exports = error404