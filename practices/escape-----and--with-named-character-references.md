# `&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする

バグのないHTML文書を作成するためには、これらの文字は常にエスケープされるべきです。

悪い例:

    <h1>The "&" character</h1>

良い例:

    <h1>The &quot;&amp;&quot; character</h1>
いくつかの文字は文字参照を使う必要があります。正確には文字参照を使わなければならない場合にのみ使えば良いのですが、その条件はかなり複雑なものです。そういった条件をきちんと正確に理解することは大切ですが、常に文字参照を使ってエスケープするとしておくのが確実でしょう。

文字参照にする必要がある文字は以下の5つです。

| 文字 | 名前文字参照 |
|------|--------------|
| &    | &amp;amp;    |
| <    | &amp;lt;     |
| >    | &amp;gt;     |
| "    | &amp;quot;   |
| '    | &amp;apos;   |

HTMLにおいて特別な意味を持ち、頻出するこれらの文字が、HTML文書のテキスト・ノードにあらわれてしまうと、ブラウザーが正確にパースできなくなってしまいます。逆に言うとこれらの文字さえきちんと文字参照を使ってエスケープしておけば、きちんとレンダリングされることが期待できるでしょう。

これらは数値文字参照でも表現できます。しかし、伝統的に使われてきた名前文字参照を使ってエスケープする方が、多くの人にわかりやすいでしょう。