import Article from "./Article";

function ArticleList({item}) {
    return (<>
        <main>
            <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>
        </main>
    </>)
}


export default ArticleList;