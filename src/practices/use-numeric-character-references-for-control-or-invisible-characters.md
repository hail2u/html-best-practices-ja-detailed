# 制御文字や不可視文字は数値文字参照を使う

これらの文字は簡単に他の文字と間違えられてしまいます。また仕様では、これらの文字へ人間にわかりやすい名前が付けられていることを保証していません。

悪い例:

    <p>This book can read in 1 hour.</p>

良い例:

    <p>This book can read in 1&#xA0;hour.</p>

HTML文書において特別な意味を持つ文字以外にも、いくつかの文字は文字参照を使った方が無難な場合があります。例えばemスペースやゼロ幅スペースなどがそうです。これらは、エディター等のソフトウェア上で、通常の空白文字とまったく区別がつきません。そのため必要なのにも関わらず消されてしまったり、また不必要なのにも関わらず他へコピーされてしまったりします。

このようなホワイトスペース文字だけでなく、ユニコードでは様々な図形表現を持たない特殊用途文字が存在し、場合によってはそれらを利用する必要が出てきます。文字参照でエスケープすることで、そのような特殊な制御文字の存在を明示でき、よりわかりやすいHTML文書となるはずです。例えば以下の文字は文字参照の方が無難でしょう。enスペースは半角スペースと、emスペースは全角スペースと区別がつかないですし、ゼロ幅スペースはその存在を認識できないからです。

| 文字                 | 数値文字参照 |
|----------------------|--------------|
| enスペース           | &amp;#x2002; |
| emスペース           | &amp;#x2003; |
| ゼロ幅スペース       | &amp;#x200B; |
| ゼロ幅非改行スペース | &amp;#xFEFF; |
| Left-to-Right        | &amp;#x200E; |
| Right-to-Left        | &amp;#x200F; |

これらには名前文字参照も用意されていますが、ゼロ幅非改行スペースなど最近のユニコード仕様で追加された制御文字には用意されていません。そのためこのように数値文字参照を使うように統一すると、HTMLにおいて特別な意味を持つ文字のエスケープであることが明確に区別ができ、わかりやすいでしょう。ただし、以前からよく使われていたノーブレーク・スペース（`&nbsp;`）に限っては名前文字参照の方がわかりやすいかもしれません。
