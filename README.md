# 普通のHTMLの書き方

保守しやすく、規模に依存しないHTML文書のために


- 一般
    - [DOCTYPEで始める](#start-with-doctype)
    - [置き換えられるべきまたは旧式のDOCTYPEを使わない](#dont-use-legacy-or-obsolete-doctype)
    - [XML宣言を使用しない](#dont-use-xml-declaration)
    - [文字参照はできる限り使わない](#dont-use-character-references-as-much-as-possible)
    - [`&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする](#escape-amp-lt-gt-quot-and-apos-with-named-character-references)
    - [制御文字や不可視文字は数値文字参照を使う](#use-numeric-character-references-for-control-or-invisible-characters)
    - [コメントではその内容の前後へ空白文字を置く](#put-white-spaces-around-comment-contents)
    - [終了タグを省略しない](#dont-omit-closing-tag)
    - [空要素の書き方を混ぜない](#dont-mix-empty-element-format)
    - [タグや属性値の前後へ空白文字を置かない](#dont-put-white-spaces-around-tags-and-attribute-values)
    - [大文字・小文字を混ぜない](#dont-mix-character-cases)
    - [引用符を混ぜない](#dont-mix-quotation-marks)
    - [属性を2文字以上の空白文字で区切らない](#dont-separate-attributes-with-two-or-more-white-spaces)
    - [真偽値を取る属性の値は省略する](#omit-boolean-attribute-value)
    - [名前空間は省略する](#omit-namespaces)
    - [XML属性は使わない](#dont-use-xml-attributes)
    - [`data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない](#dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes)
    - [デフォルトの暗黙のARIAセマンティックスを尊重する](#prefer-default-implicit-aria-semantics)
- 文書要素
    - [`lang`属性を追加する](#add-lang-attribute)
    - [`lang`属性の値はできる限り短くする](#keep-lang-attribute-value-as-short-as-possible)
    - [できる限り`data-*`属性は避ける](#avoid-data-as-much-as-possible)
- 文書メタデータ
    - [`title`要素を書く](#add-title-element)
    - [`base`要素を使わない](#dont-use-base-element)
    - [マイナーな参照先リソースのMIMEタイプを指定する](#specify-mime-type-of-minor-linked-resources)
    - [`favicon.ico`へリンクしない](#dont-link-to-faviconico)
    - [`apple-touch-icon`へのリンクを書く](#add-apple-touch-icon-link)
    - [代替スタイルシートへ`title`属性を追加する](#add-title-attribute-to-alternate-stylesheets)
    - [URLには`link`要素を使う](#for-url-use-link-element)
    - [文書の文字エンコーディングを指定する](#specify-document-character-encoding)
    - [置き換えられるべき文字エンコーディング指定フォーマットを使わない](#dont-use-legacy-character-encoding-format)
    - [最初に文字エンコーディングを指定する](#specify-character-encoding-at-first)
    - [UTF-8を使う](#use-utf-8)
    - [CSSの`type`属性は省略する](#omit-type-attribute-for-css)
    - [`style`要素の中をコメントアウトしない](#dont-comment-out-contents-of-style-element)
    - [CSSとJavaScriptのタグを混ぜない](#dont-mix-tag-for-css-and-javascript)
- セクション
    - [`body`要素を書く](#add-body-element)
    - [`hgroup`要素のことは忘れる](#forget-about-hgroup-element)
    - [`address`要素は連絡先情報にのみ使う](#use-address-element-only-for-contact-information)
- グルーピングコンテンツ
    - [`pre`要素は改行で始めない](#dont-start-with-newline-in-pre-element)
    - [`blockquote`要素内でも適切な要素を使う](#use-appropriate-element-in-blockquote-element)
    - [`blockquote`要素内に帰属情報を含めない](#dont-include-attribution-directly-in-blockquote-element)
    - [リスト項目は1行に1つずつ書く](#write-one-list-item-per-line)
    - [`ol`要素では`type`属性を使う](#use-type-attribute-for-ol-element)
    - [`dl`を会話のために使わない](#dont-use-dl-for-dialogue)
    - [`figcaption`要素は`figure`要素の最初か最後に置く](#place-figcaption-element-as-first-or-last-child-of-figure-element)
    - [`main`要素を使う](#use-main-element)
    - [できる限り`div`要素は避ける](#avoid-div-element-as-much-as-possible)
- テキストレベルセマンティックス
    - [グループ化できるリンクは分割しない](#dont-split-same-link-that-can-be-grouped)
    - [リソースをダウンロードさせる場合は`download`属性を使う](#use-download-attribute-for-downloading-a-resource)
    - [`rel`や`hreflang`、`type`属性を必要ならば使う](#use-rel-hreflang-and-type-attribute-if-needed)
    - [リンク文字列は明確にする](#clear-link-text)
    - [`em`要素を警告や注意に使わない](#dont-use-em-element-for-warning-or-caution)
    - [できる限り`s`や`i`、`b`、`u`要素を避ける](#avoid-s-i-b-and-u-element-as-much-as-possible)
    - [`q`要素内へ引用符は置かない](#dont-put-quotes-to-q-element)
    - [`abbr`要素へ`title`属性を追加する](#add-title-attribute-to-abbr-element)
    - [`ruby`要素は冗長にマークアップする](#markup-ruby-element-verbosely)
    - [機械的に解釈可能でない`time`要素では`datetime`属性を追加する](#add-datetime-attribute-to-non-machine-readable-time-element)
    - [コードの言語は`class`属性で`language-`で始めることで指定する](#specify-code-language-with-class-attribute-prefixed-with-language)
    - [できる限り`kbd`要素はシンプルにする](#keep-kbd-element-as-simple-as-possible)
    - [できる限り`span`要素は使わない](#avoid-span-element-as-much-as-possible)
    - [`br`要素の後ろでは改行する](#break-after-br-element)
    - [見た目だけのために`br`要素を使わない](#dont-use-br-element-only-for-presentational-purpose)
- 編集
    - [`ins`や`del`要素は他の要素をまたがせない](#dont-stride-ins-and-del-element-over-other-elements)
- エンベディッドコンテンツ
    - [`picture`要素ではフォールバックのための`img`要素を提供する](#provide-fallback-img-element-for-picture-element)
    - [必要な時は`img`要素へ`alt`属性を追加する](#add-alt-attrbute-to-img-element-if-needed)
    - [可能ならば`alt`属性は空にする](#empty-alt-attribute-if-possible)
    - [可能ならば`alt`属性は省略する](#omit-alt-attribute-if-possible)
    - [`iframe`要素の中は空にする](#empty-iframe-element)
    - [`map`要素の中はマークアップする](#markup-map-element-content)
    - [`audio`や`video`要素にフォールバックのためのコンテンツを提供する](#provide-fallback-content-for-audio-or-video-element)
- テーブルデータ
    - [1行に1つのセルを書く](#write-one-cell-per-line)
    - [見出しセルには`th`要素を使う](#use-th-element-for-header-cell)
- フォーム
    - [フォームコントロールは`label`要素で括る](#wrap-form-control-with-label-element)
    - [可能ならば`for`属性は省略する](#omit-for-attribute-if-possible)
    - [`input`要素では適切な`type`属性を使う](#use-appropriate-type-attribute-for-input-element)
    - [`input type="submit"`には`value`属性を追加する](#add-value-attribute-to-input-typesubmit)
    - [`pattern`属性を持つ`input`要素には`title`属性を追加する](#add-title-attribute-to-input-element-when-there-is-pattern-attribute)
    - [`placeholder`属性をラベル付けに使わない](#dont-use-placeholder-attribute-for-labeling)
    - [`option`要素は1行に1つ書く](#write-one-option-element-per-line)
    - [`progress`要素には`max`属性を追加する](#add-max-attribute-to-progress-element)
    - [`meter`要素では`min`及び`max`属性を追加する](#add-min-and-max-attribute-to-meter-element)
    - [`legend`要素は`fieldset`要素の最初に置く](#place-legend-element-as-the-first-child-of-fieldset-element)
- スクリプティング
    - [JavaScriptでは`type`属性を省略する](#omit-type-attribute-for-javascript)
    - [`script`要素の中をコメントアウトしない](#dont-comment-out-contents-of-script-element)
    - [`script`要素を動的に生成するテクニックを使わない](#dont-use-script-injected-script-element)
- その他
    - [一貫した量でインデントする](#indent-consistently)
    - [内部リンクには絶対パスを使う](#use-absolute-path-for-internal-links)
    - [外部リソースにはプロトコル相対URLを使わない](#dont-use-protocol-relative-url-for-external-resources)


## 一般

### DOCTYPEで始める<span id="start-with-doctype"></span>

DOCTYPEは標準モードを有効にするために必要です。

悪い例:

    <html>
      ...
    </html>

良い例:

    <!DOCTYPE html>
    <html>
      ...
    </html>

現在のHTML仕様では、DOCTYPEそのものに意味はほとんどありません。これは過去、現在、そして残念ながら未来のブラウザーとの互換性のためだけに存在します。ではこのDOCTYPEを書かないとどうなるのでしょうか？

ブラウザーには[*モード*というとても残念な仕組み](https://developer.mozilla.org/ja/docs/Quirks_Mode_and_Standards_Mode)があり、そしてこれからもあり続けることでしょう。このモードは、標準仕様に基いてレンダリングすると表示が崩れてしまうウェブページを、HTMLを修正することなくどうにかうまく表示してやろうという対策の結果、生まれました。モードそのものは過去のしがらみとも言えますが、問題はこのモードの切り替えにDOCTYPEのあるなしが流用されているということです。その流用の結果、HTML文書へDOCTYPEを書かない場合に、仕様とは互換性のない形でレンダリングされてしまうという不幸な仕組みになってしまいました。

仕様と互換性のないこのレンダリングについて正確に知ることは困難を極めます。単に昔の仕様に基づいたものであるだけでなく、過去のブラウザーにおけるバグをも内包するものだからです。つまりこのモードでレンダリングされてしまうと（DOCTYPEを書かないと）、どのようにレンダリングされるかは経験と勘というとても曖昧なものでしか判断できません。チーム開発では致命的でしょう。

幸い、現行のブラウザーは良い例で挙げたような短いDOCTYPEを書くだけできちんと仕様に基づいてレンダリングしてくれるようになりました。思ってもみないレンダリング結果に苦しめられるくらいなら、このソラで覚えられる15文字を必ず書くようにするべきです。


### 置き換えられるべきまたは旧式のDOCTYPEを使わない<span id="dont-use-legacy-or-obsolete-doctype"></span>

もはやDOCTYPEはDTDのためにあるわけではないので、シンプルにしましょう。

悪い例:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
      "http://www.w3.org/TR/html4/strict.dtd">

良い例:

    <!DOCTYPE html>

過去のHTML仕様ではDOCTYPEはもっと複雑なものでした。例えばHTML 4.01では、悪い例で挙げたようなDOCTYPEを書くことでようやくHTML 4.01 Strict DTDに基いてHTML文書が解釈されるように指示できます。現在のHTML仕様では、後方互換性を維持したままこの長いDOCTYPEを短くする方法を模索し、最終的に15文字という短いものに決まりました。この短さは書きやすいだけでなく、更新されることのない古いブラウザーでの安定した挙動を保証するものです。

現在のHTML仕様では、短いDOCTYPEを出力できない、つまりもはや手を入れられないレガシーな仕組みに限り、この長い呪文のようなDOCTYPEを使っても良いとされています。こういった面からも長いDOCTYPEを書く必要はまったくないでしょう。


### XML宣言を使用しない<span id="dont-use-xml-declaration"></span>

まだXHTMLを書きたいんですか？

悪い例:

    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <!DOCTYPE html>

良い例:

    <!DOCTYPE html>

XHTML 1.xでは、XML 1.0にも従うことが要求されます。そのためXML宣言（またはプロローグ）と呼ばれる、悪い例として挙げたようなバージョンと文字エンコーディングを指定するための文字列をDOCTYPEの更に前に書くことが望ましいとされていました。またそう書くことでHTML文書がXML文書として、つまりXHTML 1.xと高い互換性を維持して解釈されることが期待できます。

仕様ではXHTML構文として章が割かれているため、あたかもXHTML 1.xに準じた形でHTML文書を書きたい場合に、XML宣言が必要に思えますが、実際にはそうではありません。なぜなら仕様でHTML構文の方にもXHTML 1.xの機能や特徴のいくつかが取り込まれているからです（全てではありません）。例えばXHTML 1.xで最もわかりやすい特徴といえる空要素の閉じ方がそうです。

    <hr>
    <hr/>
    <hr />

この3種類の`hr`タグの書き方はどれも仕様においては間違いではありません。例え同じHTML文書内でバラバラの書き方をされていても、です。

このようにHTML 4.01に近い書き方のHTML文書であろうと、XHTML 1.1に近い書き方のHTML文書であろうと、両者が混ざったHTML文書であろうと、HTML構文としてきちんとパースできるよう仕様では定義されています。もちろん現行のブラウザーも問題なくパースし、レンダリングしてくれるでしょう。XML宣言の実用的な機能である文字エンコーディングの指定は[別に行えること](#specify-document-character-encoding)も考慮すると、自然とXML宣言は不要だという結論になります。


### 文字参照はできる限り使わない<span id="dont-use-character-references-as-much-as-possible"></span>

UTF-8でHTML文書を書くなら、Emojiも含めほとんどあらゆる文字はそのまま書けます。

悪い例:

    <p><small>Copyright &copy; 2014 W3C<sup>&reg;</sup></small></p>

良い例:

    <p><small>Copyright © 2014 W3C<sup>®</sup></small></p>

HTML 4.01では、HTML文書で利用している文字コードで表現できない文字は文字参照を使うとされていました。そのため、シフトJISやEUC-JPが主に利用されていた日本では、自然と文字参照を使う機会は多くなっていました。

現在のHTML仕様では、文字参照についての項は大幅に削減されています。

> これは、他の方法で合法的にテキストに含めることができない文字をエスケープするために使用できる。

仕様ではこのような表現になっているので、どうしてもという場合ではない限り使わない方が良い、と考えた方が無難です。つまり[UTF-8の利用](#use-utf8)を前提とすると、表現できない文字というものがまずないため、文字参照を使う機会もまたまずありません。

伝統的に名前文字参照（HTML 4.01仕様では文字実体参照）を使っていたような文字もそのまま書いて問題ありません。良い例で挙げたのようにコピーライト・マークや登録商標マークもそのまま書けば、読みやすいHTML文書になるはずです。


### `&`と`<`、`>`、`"`、`'`は名前文字参照を使ってエスケープする<span id="escape-amp-lt-gt-quot-and-apos-with-named-character-references"></span>

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


### 制御文字や不可視文字は数値文字参照を使う<span id="use-numeric-character-references-for-control-or-invisible-characters"></span>

これらの文字は簡単に他の文字と間違えられてしまいます。また仕様では、これらの文字へ人間にわかりやすい名前が付けられていることを保証していません。

悪い例:

    <p>This book can read in 1 hour.</p>

良い例:

    <p>This book can read in 1&#xA0;hour.</p>

HTML文書において特別な意味を持つ文字以外にも、いくつかの文字は文字参照を使った方が無難な場合があります。例えばemスペースやゼロ幅スペースなどがそうです。これらは、エディター等のソフトウェア上で、通常の空白文字とまったく区別がつきません。そのため必要なのにも関わらず消されてしまったり、また不必要なのにも関わらず他へコピーされてしまったりします。

このようなホワイトスペース文字だけでなく、ユニコードでは様々な図形表現を持たない特殊用途文字が存在し、場合によってはそれらを利用する必要が出てきます。文字参照でエスケープすることで、そのような特殊な制御文字の存在を明示でき、よりわかりやすいHTML文書となるはずです。例えば以下の文字は文字参照の方が無難でしょう。enスペースは半角スペースと、emスペースは全角スペースと区別がつかないですし、ゼロ幅スペースはその存在を認識できないからです。

| 文字                             | 数値文字参照 |
|----------------------------------|--------------|
| enスペース                       | &amp;#x2002;     |
| emスペース                       | &amp;#x2003;     |
| ゼロ幅スペース                   | &amp;#x200B;     |
| ゼロ幅非改行スペース             | &amp;#xFEFF;     |
| Left-to-Right                    | &amp;#x200E;     |
| Right-to-Left                    | &amp;#x200F;     |

これらには名前文字参照も用意されていますが、ゼロ幅非改行スペースなど最近のユニコード仕様で追加された制御文字には用意されていません。そのためこのように数値文字参照を使うように統一すると、HTMLにおいて特別な意味を持つ文字のエスケープであることが明確に区別ができ、わかりやすいでしょう。ただし、以前からよく使われていたノーブレーク・スペース（`&nbsp;`）に限っては名前文字参照の方がわかりやすいかもしれません。


### コメントではその内容の前後へ空白文字を置く<span id="put-white-spaces-around-comment-contents"></span>

いくつかの文字はコメントの開始直後や終了直前に書けません。

悪い例:

    <!--This section is non-normative-->

良い例:

    <!-- This section is non-normative -->

コメントは比較的自由に書けます。数少ない制限のひとつとして、コメント内の最初と最後に使えない文字（列）があります。具体的には以下の3つです。

1. &gt;で開始
2. ->で開始
3. -で終了

コメントは、自身で能動的に書く以外にも、様々な形で自動的に挿入されます。そういった場合も含めて、これらの制限を確実に避けるためには、良い例で挙げたようにコメントの最初と最後に*半角空白*を入れるのが良いでしょう。理論上は半角空白以外の何かしらの文字でも問題ありませんが、読みやすさや入力のしやすさを考慮すると半角空白が適当です。


### 終了タグを省略しない<span id="dont-omit-closing-tag"></span>

多分、あなたは終了タグを省略するためのルールを理解していないでしょう。

悪い例:

    <html>
      <body>
        ...

良い例:

    <html>
      <body>
        ...
      </body>
    </html>

HTML文書では、いくつかのルールに従って終了タグ（閉じタグ）を省略できます。`img`要素のようにそもそも終了タグを持たない要素もあります。仕様では、各要素の説明で「Tag omission in text/html（text/htmlにおけるタグ省略）」としてすべて解説されており、それに従って省略することになります。

例えば`p`要素では、ほとんどの場合で終了タグを省略することが可能です。

    <p>吾輩は猫である。名前はまだない。
    <p>どこで生れたかとんと見当がつかぬ。

後続の要素が特定の要素ならば省略できる、というルールに基づいた挙動です。しかし例外もあり、以下の様なケースでは最初の`p`要素の終了タグは省略できません。

    <a href="/"><p>ホームページ</a>
    <section>...</section>

親に`a`要素を持つ場合は省略できない、というルールがあるからです。このような特別なルールを持つ要素はあまりありませんが、そのすべてをきちんと覚えるとなるとなかなか大変ですし、そのような知識を他人にも要求することは無理があるでしょう。

    <a href="/"><p>ホームページ</p></a>
    <section>...</section>

幸い、終了タグを常に書くというわかりやすいルールでは問題が起こることはありません。そうすることでブラウザーも正しく解釈してくれることでしょう。


### 空要素の書き方を混ぜない<span id="dont-mix-empty-element-format"></span>

一貫性は読みやすさのキーポイントです。

悪い例:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr />

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png">
    <hr>

[XML宣言の項](#dont-use-xml-declaration)において述べたように、現在のHTMLではXHTML 1.1の機能や特徴をいくつか取り込んでいます。空要素の書き方はその1つで、XHTML 1.1のようにスラッシュを追加して閉じても間違いではありません。

    <hr>
    <br/>
    <img alt="赤いチューリップ畑" src="red.png" />

間違いではないというのはあくまでも文法においてであり、同じHTML文書において違う書き方を混ぜるのは読みやすいとはとても言えません。

仕様ではXHTML 1.1由来のスラッシュが置かれていても特別な意味は持たないと定義されています。どちらかというと、良い例で挙げたようなスラッシュを追加しない書き方が主流のようです。統一されてさえいればどちらの書き方でも構わないでしょう。


### タグや属性値の前後へ空白文字を置かない<span id="dont-put-white-spaces-around-tags-and-attribute-values"></span>

そうする必要はまったくありません。

悪い例:

    <h1 class=" title " >HTML Best Practices</h1>

良い例:

    <h1 class="title">HTML Best Practices</h1>

仕様によると、タグの最後や属性値の前後、属性名と属性値をつなぐ等号の前後には空白を入れることが可能です。タグの先頭には空白を入れることはできませんが、他ではかなり自由にタブや改行を含めた空白を任意に挿入できます。

悪い例は極端なものですが、等号の前後や属性値の前後に空白を入れたHTML文書を見かけることはあるでしょう。こういった空白は任意の数を挿入できるので、うまく使えば読みやすくなるかもしれません。例えば、属性ごとに改行を入れて整形したHTMLコードを見かけることはあるでしょう。しかし、その読みやすさが他人の賛同を得られるかどうかは未知で、逆に読みづらいととらえる人もいるかもしれません。

空白を入れることなく書かれているHTMLコードが一般的に多いことは感覚的にわかるはずです。そのことを考慮すると、良い例で挙げたような書き方をしておけばすくなくとも読みづらいとは思われないでしょう。


### 大文字・小文字を混ぜない<span id="dont-mix-character-cases"></span>

これも一貫性を与えてくれます。

悪い例:

    <a HREF="#general">General</A>

良い例:

    <a href="#general">General</a>

同じく良い例:

    <A HREF="#general">General</A>

複数の開発者により書かれる場合に限らず、タグの書き方に一貫性がないHTML文書を見かけることはよくあります。その一貫性のなさは要素同士だけでなく、開始タグと終了タグ、要素名と属性名でもあります。

    <P>W3Cについて、より詳しくは
    <a Href="http://www.w3.org/">W3CのWebサイト</A>
    をご参照ください。</P>

仕様では大文字と小文字の区別はないので、文法としては決して間違いではありません。しかし大文字と小文字の違いは比較的目に止まりやすいため、HTMLコードの読みやすさに大きな影響を与えます。その影響は決して良いものではなく、違和感や不必要な強調として捉えられ、HTMLコードの把握に悪影響を与えることが多いでしょう。

    <p>W3Cについて、より詳しくは
    <a href="http://www.w3.org/">W3CのWebサイト</a>
    をご参照ください。</p>

より読みやすいHTMLソースのために、まずは大文字・小文字、そして引用符の統一から始めましょう。何に統一するかは自由です。一般的には小文字で書く人が増えているようですので、そうするのも悪くはありません。


### 引用符を混ぜない<span id="dont-mix-quotation-marks"></span>

上に同じです。

悪い例:

    <img alt="HTML Best Practices" src='/img/logo.jpg'>

良い例:

    <img alt="HTML Best Practices" src="/img/logo.jpg">

要素の各属性は空白文字で区切られるため、必要に応じてその値は引用符で括ります。しかしながら引用符は省略できない場合もあるため、なるべくあらゆる属性値は下記のいずれかの引用符を使って括ると良いでしょう。テキスト・エディターの構文強調においても有利に働くことも見逃せません。

- '一重引用符'
- "二重引用符"

その上でHTML文書内で使用する引用符を統一するとより一貫性と保守性の向上が見込めます。

    <h1 class="title">吾輩は猫である</h1>
    <h2 class='author'>夏目漱石</h2>

HTMLの解釈において引用符の違いが問題になることはまずありませんが、*引用符で括られているなら属性値である*とみなせるため、認識性が格段に向上します。このことが保守性の向上に大きく貢献するわけです。

    <h1 class="title">吾輩は猫である</h1>
    <h2 class="author">夏目漱石</h2>

なお一重、二重のどちらの引用符を利用するかは自由です。一重引用符は文書内でアポストロフィーの代わりに多用されることを考慮すると、二重引用符の方がわかりやすい可能性はありますが、重要なことはどちらかに統一することです。


### 属性を2文字以上の空白文字で区切らない<span id="dont-separate-attributes-with-two-or-more-white-spaces"></span>

あなたのよくわからない整形ルールは誰かを混乱させます。

悪い例:

    <input   name="q"  type="search">

良い例:

    <input name="q" type="search">

要素の属性を区切る空白文字は、1つ以上ならいくつでも許可されています。悪い例で挙げたように半角空白を3つ入れても間違いではありません。この文法上のルールを利用すると、様々な形でHTMLを整形することが可能です。

    <input
            class="q"
      placeholder="空白切りで検索語を入力"
             type="text">

極端な例を挙げると、このように複数の属性がある場合に`=`を揃えても、その解釈にまったく問題はありません。こういった書き方は読みやすいかもしれませんが、こういった整形ルールを明確に定義することはとても難しいでしょう。明文化できないということは、共に開発を行う人々はもちろん、1年後の自分が理解に苦しむかもしれません。

    <h1 class="title">吾輩は猫である</h1>
    
    <input class="q" placeholder="空白切りで検索語を入力" type="text">

属性を*常に半角空白1つで区切る*という明快なルールは多くの人に受け入れられることでしょう。読みやすさが向上するということはありませんが、少なくとも読みやすさが落ちるということはありません。


### 真偽値を取る属性の値は省略する<span id="omit-boolean-attribute-value"></span>

この方が簡単に書けますよね？

悪い例:

    <audio autoplay="autoplay" src="/audio/theme.mp3">

良い例:

    <audio autoplay src="/audio/theme.mp3">

属性の多くは不定の値を取りますが、中には真偽値を取る属性もあります。例えば`input`要素における`checked`属性はHTML 4.01から存在した真偽値を取る属性です。真偽値を取る属性では、その値に属性名をそのまま指定するか、空文字列を指定することで有効にできます。

    <input checked="checked" disabled="" type="checkbox">

この例ではchecked属性では属性名をそのまま書き、disabled属性では空文字列を指定しています。どちらの書き方でも問題なく属性の指定が有効化されます。

また、このような真偽値を取る属性は一般に値を省略できます。正確には、値を省略した場合は空文字列とみなされるため、結果的に省略できる、という仕組みが仕様で決まっています。

    <input checked disabled type="checkbox">

明らかにこの方が書きやすく、また読みやすいでしょう。属性名をそのまま指定するのは冗長すぎ、空文字列はあまり使われないことを考えると、このように省略するのが最も良いはずです。


### 名前空間は省略する<span id="omit-namespaces"></span>

SVGやMathMLはHTMLの文書では直接扱えます。

悪い例:

    <svg xmlns="http://www.w3.org/2000/svg">
      ...
    </svg>

良い例:

    <svg>
      ...
    </svg>

現在のHTMLでもXHTML 1.xのように名前空間を指定して拡張できます。XML構文を使う必要がありますが、今まで通り`xmlns`属性を使うだけです。しかし、XHTML 2.0の策定が頓挫した理由の1つとして、柔軟な拡張がそれほど求められていなかったことが挙げられるように、名前空間を指定してまで拡張する機会はまずないはずです。

比較的利用する機会があると考えられたMathMLや、存在感を増してきたSVGに関しては、限定的ではありますがインラインでそのまま利用できるように仕様で定義されています。そのため、悪い例で挙げたように指定する必要はまったくありません。


### XML属性は使わない<span id="dont-use-xml-attributes"></span>

我々はHTML文書を書いています。

悪い例:

    <span lang="ja" xml:lang="ja">...</span>

良い例:

    <span lang="ja">...</span>

XHTML 1.xでは、必要に応じてXML属性も併記する必要がありました。例えば`lang`属性を使用する場合には、悪い例で挙げたように同じ値の`xml:lang`属性も併記する、と指示されています。

現在のHTMLでは、この`lang`属性と`xml:lang`属性についてわざわざ項が割かれています。おおまかに抜粋すると、HTML文書では書いてはならないとされており、XML文書でも書いても良い（MAY）程度に変更されています。

HTML文書を書き、[名前空間を使わないと](#omit-namespaces)、事実上`xml:lang`属性以外にXML属性が使われそうな状況はありません。良い例で挙げたように書くべきです。


### `data-*`とMicrodata、RDFa Lite用の属性と通常の属性を混ぜない<span id="dont-mix-data-microdata-and-rdfa-lite-attributes-with-common-attributes"></span>

タグ文字列はとても複雑になりえます。こういった簡単なルールによってタグ文字列を読みやすくできるでしょう。

悪い例:

    <img alt="HTML Best Practices" data-height="31" data-width="88" itemprop="image" src="/img/logo.png">

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png" data-width="88" data-height="31" itemprop="image">

現在のHTML仕様では、MicrodataやRDFa Liteのための属性や、ユーザーが独自に定義することのできるカスタムデータ属性を、前置きなしで（`head`要素の`profile`属性を使って定義したりせずに）そのまま書けるようになりました。具体的な使い方については触れませんが、漫然と追加すれば良いというわけではありません。

例えば良くあるコーディング規約として*属性をアルファベット順に記述する*というものがあります。それに忠実に従ってカスタムデータ属性やMicrodataの属性を要素に追加すると、悪い例で挙げたようなコードになります。カスタムデータ属性は`data-`で必ず始まり、Microdataの属性は`item`で必ず始まるので、このように要素ごとの属性の間に挟まってしまうでしょう。ある程度はまとまっていますが、要素ごとの属性が分断されてしまっていると、どのような属性が指定されているのか把握しづらくしてしまいます。

良い例で挙げたように、まずはそれぞれの要素ごとに定義されている属性を書くと、そこでその要素がどういう振る舞いをするのかが概ね決定できるので、どのような意図を持った要素なのかが明確になります。続けてカスタムデータ属性はカスタムデータ属性でまとめ、Microdataの属性もMicrodataの属性でまとめて書くようにするのが良いでしょう。


### デフォルトの暗黙のARIAセマンティックスを尊重する<span id="prefer-default-implicit-aria-semantics"></span>

いくつかの要素はHTML文章において暗黙的にARIA `role`を持っているので、それは指定しないようにしましょう。

悪い例:

    <nav role="navigation">
      ...
    </nav>
    
    <hr role="separator">

良い例:

    <nav>
      ...
    </nav>
    
    <hr>

現在のHTML仕様では、それぞれの要素がどのような機能を持つのかをWAI-ARIAと連携する形で定義されています。これにより定義されているデフォルトの機能と、実際にドキュメント上で提供する機能とが食い違っている場合、`role`属性でその役目をきちんと教えてやる必要があります。そうすることでよりアクセシブルなHTML文書を作成できるでしょう。

しかし、`role`属性を使えば自由に要素の機能を変えられるわけではありません。多くの要素は限られたいくつかの機能の中から1つ指定するだけにとどまります。例えば`a`要素に`article`ロールは割り当てられません。中には仕様で定義されているデフォルトの機能以外に変更することはできない要素もあります。こういった変更できない*強いネイティヴセマンティックス*を持つ要素では、事実上`role`属性を使うことはできません。

ブラウザーにおいて、現在のHTML仕様への準拠がまだまだ進んでいなかった時代には、悪い例で挙げたように書いていましたが、もはやこのように書く必要はないでしょう。良い例で挙げたように何も指定せずとも`nav`要素がデフォルトで持つ`navigation`ロールが割り当てられるはずです。アクセシブルなHTML文書のためには他にも気をつけることは色々ありますが、少なくとも余計な混乱を招かないよう、無駄な`role`属性をできる限り省くことは意識すると良いでしょう。


## 文書要素

### `lang`属性を追加する<span id="add-lang-attribute"></span>

`lang`属性はHTML文書の翻訳に役立ちます。

悪い例:

    <html>

良い例:

    <html lang="en-US">

HTML文書はどのような言語でも書くことができます。もちろんタグに関しては主にアルファベットと記号の組み合わせになりますが、コンテンツは英語であろうと日本語であろうと、ヴィラモヴィアン語であろうと、はたまたマンダロリアン語であろうと構いません。ただしどのような言語で書かれているのかを`lang`属性を使ってユーザー・エージェントやユーザーに教えてやる必要はあります。

    <html lang="en-GB">
      ...
    </html>

主に使う言語がわかっている（決まっている）のならば、このように`html`要素で`lang`属性を使って指定すると良いでしょう。文書内のごく限られた範囲で変更したい場合は、その範囲を内包する要素で利用するだけです。

    <html lang="ja">
      ...
      <blockquote lang="es-ES">
        <p>Todo lo que puede ser imaginado es real.</p>
      </blockquote>
      <p>パブロ・ピカソの言葉だと言われています。</p>
      ...
    </html>

このようにきちんと言語を明示しておくことで、クライアント側ではブラウザーの翻訳ツールなどがうまく利用してくれます。検索エンジンのようなサーバー側でもうまく扱ってもらえることが期待でき、その結果より良い検索結果を提供してくれることでしょう。


### `lang`属性の値はできる限り短くする<span id="keep-lang-attribute-value-as-short-as-possible"></span>

日本語は日本でのみ使われます。つまり国コードは必要ありません。

悪い例:

    <html lang="ja-JP">

良い例:

    <html lang="ja">

英語のHTML文書では、まず`html`要素の`lang`属性で言語タグを使って、英語であることを明示します。

    <html lang="en-US">
      ...
    </html>

この`en-US`という言語タグは様々な形で見かけるものですが、以下の2つの要素から成り立っています。

- `en`: *英語*という言語であること
- `US`: *アメリカ合衆国*という領域で話されている言語であること

つまりこの言語タグを`html`要素の`lang`属性の値として指定されたHTML文書は、*アメリカ合衆国で話されている英語*で書かれたHTML文書です。実際には[もっと複雑な仕組み](http://www.w3.org/International/articles/language-tags/)がIETF（The Internet Engineering Task Force）という組織によって定められています。HTML文書の国際化を考えているのなら一読しておくと良いでしょう。

日本語である場合、言語タグの書き方が少し変わってきます。それは英語が世界の様々な地域で公用語として使用されているのに対し、日本語は日本以外で公用語として使用されていないことが理由です。

    <html lang="ja">
      ...
    </html>

つまり*日本語*である時点で*日本で話されている*ことが自明なため、このように`JP`という国や地域を示すサブタグは不要です。言語タグはできうる限り短くするべきであると[その仕様（RFC5646）](http://tools.ietf.org/html/rfc5646)にも明記されていることももちろんありますが、未知の言語があたかも様々な地域で使われていると誤解を与えないためにも、できるだけ短く書くべきです。


### できる限り`data-*`属性は避ける<span id="avoid-data-as-much-as-possible"></span>

適切な属性は、ブラウザーがうまく扱ってくれるかもしれません。

悪い例:

    <span data-language="french">chemises</span>
    ...
    <strong data-type="warning">Do not wash!</strong>

良い例:

    <span title="French"><span lang="fr-FR">chemises</span></span>
    ...
    <strong class="warning">Do not wash!</strong>

HTML要素にはそれぞれ多くの属性があらかじめ定義されています。仕様では何をどうやって表現するための属性かきちんと定められているので、（対応しているのならば）どのようなツールからもきちんと解釈してもらえることが期待できるでしょう。

カスタム・データ属性は便利で手軽ですが、あくまでも自身のJavaScriptやCSSから扱われるべきものです。ブラウザーやスクリーン・リーダーがそれらをうまく扱えることは期待することはできません。悪い例で挙げたようなコードは、仕様で定義されている属性で表現できるはずです。

良い例で挙げたように、なおかつ仕様の実装例に従うと、複雑なケースもうまく処理してもらえる可能性が高くなるでしょう。


## 文書メタデータ

### `title`要素を書く<span id="add-title-element"></span>

`title`要素の中身は、ブラウザーに限らず、様々なアプリケーションにより利用されます。

悪い例:

    <head>
      <meta charset="UTF-8">
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

仕様では`title`要素は場合によって省略できる、とされています。タイトルが必要とされないような文書の場合がそれにあたり、具体的な例として、仕様では`head`要素の項で以下のように言及されています。

> 上位プロトコルがタイトル情報、たとえばHTMLが電子メールのオーサリング形式として使用されるときの電子メールの件名が提供される場合、title要素は省略できる。

この場合は電子メールの件名として既に`title`相当の情報が提供されているため、必要とされません。他にも`iframe`要素の`srcdoc`属性で指定されるドキュメントでも省略できます。どちらもかなり特別なケースだと言え、何かしらのソフトウェアが適切に取り扱う分野です。通常、HTML文書においては`title`要素を省略することはできないと考えておきましょう。

また、`title`要素によって提供される文書のタイトルは、ブラウザーや検索エンジンを始めとした様々なソフトウェアやサービスから利用されます。そういった観点からも省略することは望ましくありません。


### `base`要素を使わない<span id="dont-use-base-element"></span>

絶対パスや絶対URLの方が開発者とユーザーの双方に安全です。

悪い例:

    <head>
      ...
      <base href="/blog/">
      <link href="hello-world" rel="canonical">
      ...
    </head>

良い例:

    <head>
      ...
      <link href="/blog/hello-world" rel="canonical">
      ...
    </head>

`base`要素でHTML文書内のハイパーリンクの挙動を一括して変更できます。`href`属性はその解決に、`target`属性はその開き方に、それぞれ変更が加わります。うまく使えばHTML文書全体でのURLの書き方などを簡潔にできるでしょう。しかしその反面、`a`要素や`form`要素などを書く時は、常に`base`要素にどのような値が指定されているかを意識しなくてはなりません。

今は断片的なHTML文書を書き、何かしらのツールがそれらをまとめ、ウェブページとして完成させる時代です。そのような環境で、他の断片的なHTML文書に書かれている（かもしれない）`base`要素を意識するのは苦痛でしょう。ある日突然削除されているかもしれません。

`href`属性の利用は、外部のリソースには意味がありません。内部リソースにはスラッシュで始まる絶対パスを、外部リソースには`https:`などで始まる絶対URLを利用するのが単純でわかりやすいはずです。

ただし、`target`属性の利用は難しいところです。すべて`target=_blank`になるようにするのはなかなか興味深いアプローチです。ただ`form`要素での`target=_self`の指定し忘れには気を付けなければなりません。


### マイナーな参照先リソースのMIMEタイプを指定する<span id="specify-mime-type-of-minor-linked-resources"></span>

アプリケーションがそのリソースをどう取り扱うべきかのヒントになります。

悪い例:

    <link href="/pdf" rel="alternate">
    <link href="/feed" rel="alternate">
    <link href="/css/screen.css" rel="stylesheet">

良い例:

    <link href="/pdf" rel="alternate" type="application/pdf">
    <link href="/feed" rel="alternate" type="application/rss+xml">
    <link href="/css/screen.css" rel="stylesheet">

`a`や`link`要素では`type`属性でリソースのMIMEタイプを指定できます。この指定によりユーザーが直接恩恵を受けることはほとんどありません。しかし、例えばブラウザーが指定したMIMEタイプをサポートしていない場合、外部リソースを無理に表示しようとせずローカルにファイルとしてダウンロードさせるだけに留めるという安全な挙動をしてもらえます。

また、この仕組みを応用した具体的な実装として[RSS Autodiscovery](http://www.rssboard.org/rss-autodiscovery)があります。RSS AutodiscoveryはウェブページのRSSバージョンのURLを機械的に探せるようにする仕組みの仕様です。この仕様では、別バージョンであることを示す`rel=alternate`に加えて、RSSファイルの公式MIMEタイプである`application/rss+xml`を指定することで、RSSバージョンのURLであることを明示できます。こうすることでブラウザーからフィード・リーダーへの登録を自動化できるわけです。この仕様は少し拡張されHTML仕様にも取り込まれています。

逆に（アイコン形式の）ファビコンやCSSファイルなどの既知で扱いが安定しているものへは指定する必要はありません。


### `favicon.ico`へリンクしない<span id="dont-link-to-faviconico"></span>

ほとんどのブラウザーは`/favicon.ico`を自動的に非同期で取得します。

悪い例:

    <link href="/favicon.ico" rel="icon" type="image/vnd.microsoft.icon">

良い例:

    <!-- Place `favicon.ico` in the root directory. -->

ブックマークを始め、タブ、スマートフォンのホーム画面でのアイコンなど、ファビコンは様々な場面で使われます。古くからあったこの機能は、仕様でも触れられており、`link`要素の`rel`属性で`icon`という値を指定することで明示的に参照するようになっています。またオプションとしてメディア・タイプや縦横サイズも合わせて指定できるようになってもいます。しかしこのような参照は冗長と言えるでしょう。

そもそもこの機能が実装された当時より、ドメインのルートにある`favicon.ico`というファイルを強制的に探すようになっていました。そのためほとんどすべてのブラウザーが`favicon.ico`というファイル名でファビコンを置くだけで機能するようになっています。つまり、わざわざ指定しなくても機能します。

指定しない場合、パフォーマンスという観点でもメリットがあります。`link`要素を使ってファビコンを指定してしまうと、ブラウザーがその`link`要素をパースした直後にファビコンを読みに行くのに対し、書かない場合は、ウェブページの読み込みが完了した後にドメインのルートにある`favicon.ico`というファイルを探しに行きます。ファビコンはウェブページの閲覧においてクリティカルなものではないので、このように遅延読み込みされるとウェブページの表示が少し改善するでしょう。

仕様でも、このドメインのルートにある[`favicon.ico`というファイル読みに行く挙動](https://html.spec.whatwg.org/multipage/links.html#rel-icon)について明文化されています。つまり、ありとあらゆるツールでこの挙動が期待できるため、もはや指定する意味はほとんどありません。


### `apple-touch-icon`へのリンクを書く<span id="add-apple-touch-icon-link"></span>

デフォルトでリクエストされるタッチ・アイコンのパスは突然変わりました。

悪い例:

    <!-- Hey Apple! Please download `/apple-touch-icon.png`! -->

良い例:

    <link href="/apple-touch-icon.png" rel="apple-touch-icon">

iOSで最初にサポートされたタッチ・アイコンは、長らく暗黙的に探すパスが決まっていました。つまりファビコンと同じようにわざわざリンクを追加する必要はなかったわけです。しかしiOS 8でその挙動に変更が加わりました。今はまた変わっているかもしれませんし、こういった変更がもうないとは言い切れない状況に変化しました。

リンクがない場合に探しに行くようになっているため、リンクしないことはパフォーマンスの面でもメリットはありません。良い例で挙げたように素直に指定すると良いでしょう。後方互換性を意識して、パスは`/apple-touch-icon(-precomposed).png`にしておくのも悪くありません。


### 代替スタイルシートへ`title`属性を追加する<span id="add-title-attribute-to-alternate-stylesheets"></span>

人間にわかりやすいラベルにより適切なスタイルシートを選択しやすくなります。

悪い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet">

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <link href="/css/high-contrast.css" rel="alternate stylesheet" title="High contrast">

スタイルシートはHTML文書の体裁を整えるために使用します。場合によっては特定のユーザーへ別のスタイルシートを提供したいこともあるでしょう。しかし、`media`属性やCSSの`@media`ルールを駆使してデバイスの特性に応じて切り替えることや、ユーザーエージェント文字列を利用してサーバーサイドで動的に切り替えることには限界があります。そういった場合にも*代替スタイルシート*という手段を使って専用のスタイルシートを提供できます。

悪い例の2行目ではコントラストを大幅に高めたスタイルシートを提供しようとしています。このように`rel`属性で`alternate`と`stylesheet`の2つのキーワードを組み合わせて指定することで、ブラウザーは代替スタイルシートとして認識し、デフォルトでは反映しません。

ブラウザーでの切り替え操作はブラウザーによって違います。例えばFirefoxではメニューから切り替えられるようになっており、必要とするユーザーはそのありかを知っているので、比較的容易に切り替えることができることでしょう。他のブラウザーでは拡張をインストールする必要があるかもしれません。

しかし、悪い例のように代替スタイルシートとして提供するだけでは不十分です。代替スタイルシートの切り替え操作を行うユーザー・インターフェイスにファイル名のみしか表示されなかったり、場合によっては切り替えメニューに表示されないことすらあるからです。

代替スタイルシートへの名前付けには専用の属性は用意されておらず、`title`属性を利用して行うことになっています。良い例で挙げたように、できるだけ短く、それでいてわかりやすい名前を`title`属性で指定してやりましょう。するとわかりやすい名前で切り替えのためのユーザー・インターフェイスに表示されることが期待できます。


### URLには`link`要素を使う<span id="for-url-use-link-element"></span>

`href`属性の値はURLとして解決できます。

悪い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <meta content="https://example.com/blog/hello" itemprop="url">
      ...
    </section>

良い例:

    <section itemscope itemtype="http://schema.org/BlogPosting">
      <link href="/blog/hello" itemprop="url">
      ...
    </section>

`a`や`link`要素の`href`属性はHTML文書のURLを基準にして解決されます。つまり絶対URLでなくても良く、JavaScriptなどで走査する時に解決済みのURLを得られます。対して`meta`要素の`content`属性は汎用的な値をとるため、URLを指定したい場合は必ず絶対URLであるべきです。そうでないとURLの解決を自前で実装する必要が出てくるでしょう。つまり、URLとしてマークアップしたいのならば、URLとして解決されるであろう`link`要素の`href`属性を使うべきだ、と言い換えられます。

Facebookのいいねボタンのように、`meta`要素の利用が義務付けられている場合はしょうがありませんが、そうでないならば`link`要素などを使い絶対パスでURLを指定した方が効率的です。`https:`の「s」を忘れるようなケアレスミスも減ることでしょう。


### 文書の文字エンコーディングを指定する<span id="specify-document-character-encoding"></span>

まだすべてのブラウザーでUTF-8がデフォルトになっていません。

悪い例:

    <head>
      <title>HTML Best Practices</title>
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <title>HTML Best Practices</title>
    </head>

「[UTF-8を使う](#use-utf-8)」を参照してください。


### 置き換えられるべき文字エンコーディング指定フォーマットを使わない<span id="dont-use-legacy-character-encoding-format"></span>

HTTPヘッダーはサーバー側で指定されるべきで、簡単にしておきましょう。

悪い例:

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

良い例:

    <meta charset="UTF-8">

HTML 4.01でももちろん文字コードを指定できましたが、それはHTTPヘッダーを介して行うものでした。具体的には、悪い例で挙げたようにContent-Typeヘッダーの`charset`パラメーターを通して指定していました。

実は現在のHTMLでもこのように記述できます。しかしかなり古いブラウザーでも先述の簡潔な記述による文字コード指定を適切に解釈してくれるので、もはやこのような長い`meta`要素を書く必要はありません。良い例で挙げたような簡潔な記述がなぜ古いブラウザーでもうまく解釈されるかというと、それには歴史的な事情があります。

多くの人々はあまり正確にHTMLを記述せず、例えば必要にも関わらず属性の値を括る引用符をよく省略してしまいました。

    <meta http-equiv=Content-Type content=text/html; charset=UTF-8>

ブラウザーはそれらをなんとか解釈してやり、文字コードを適切に設定しようと試みないとなりません。そういったわけでこういった雑な`meta`要素も古いブラウザーで解釈でき、その影響で良い例で挙げたようなコードも解釈できるわけです。古いブラウザーで解釈できる限界を探った結果が、良い例で挙げたようなコードが編み出されたのです。


### 最初に文字エンコーディングを指定する<span id="specify-character-encoding-at-first"></span>

仕様では文書の先頭1024バイトまでに文字エンコーディングを指定することを要求しています。

悪い例:

    <head>
      <meta content="width=device-width" name="viewport">
      <meta charset="UTF-8">
      ...
    </head>

良い例:

    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width" name="viewport">
      ...
    </head>

文字コードの指定は`head`要素内で行う必要がありますが、その位置までは明確な規定はありません。しかしなるべく先頭、できれば一番最初に指定しておくべきでしょう。それはブラウザーの文字コード自動判別機能と密接な関係があります。

ブラウザーの文字コード判別はHTMLドキュメント全体を読み込んでから行われるとは限りません。あるブラウザーはファイルの先頭部分のみから判別を行います。また、`title`要素が文字コード指定より前にあると、うまく判別できないという問題もかつてありました。そのため[ファイルの先頭から1024バイトまでに書くように制限](https://html.spec.whatwg.org/multipage/semantics.html#charset)されています。

現在のHTML仕様では、DOCTYPE宣言他、多くの記述がシンプルになってはいます。そのため特に何も考えずに書いても1024バイトまでに収まることでしょう。しかし、良い例で挙げたように`head`要素の先頭に書くと決めておけば、確実に達成できます。


### UTF-8を使う<span id="use-utf-8"></span>

UTF-8ならEmojiを自由に使えます。

悪い例:

    <meta charset="Shift_JIS">

良い例:

    <meta charset="UTF-8">

HTMLはそれだけではなく、CSSやJavaScriptと共に配信されるものです。そのためそれらは密接に関わり合うことになります。それは単に機能や見た目でというだけでなく、コードというレベルでもそうです。その代表的な関わり合いのひとつがファイルの文字コードでしょう。

ウェブでは様々な文字コードが用いられていました。過去にはほとんどの人がWindowsのパソコンで制作していたこともあり、よくシフトJISが利用されていましたが、CGIによるサーバーサイドでの動的なウェブページの作成においては多くの問題が起こるため、そういったウェブページではEUC-JPが使われていました。シフトJISとEUC-JPのどちらが優れているかは様々な問題が絡むため一概には言えませんでしたが、現在は、明らかなデメリットがないUnicodeの符号化形式のひとつであるUTF-8が広く使われるようになっています。

しかし、その一方でブラウザーがデフォルトで利用する文字コードはUTF-8では統一されていません。またユーザーの設定にも依存します。多くのブラウザーは自動判別をしてくれますが、それも確実であるとは言えません。そのため単に[UTF-8で書く](#dont-use-legacy-character-encoding-format)だけではなく、UTF-8で書かれていることをHTML文書で明示的に宣言してやる必要があります。

現在のHTML仕様では、良い例で挙げたように、ごく短い記述でHTML文書の文字コードを指定できます。これでブラウザーを始めとしたあらゆるツールが適切にHTML文書を解釈できるでしょう。また、文字コードを明示的に指定すれば、[以前にあったセキュリティ上の問題](http://openmya.hacker.jp/hasegawa/security/utf7cs.html)も起こりづらくなります。

また、仕様では`charset`属性の値として「UTF-8」以外は許可されていません。その上、HTML文書の文字エンコーディングはUTF-8でなければならないとも明言されています。Emojiを自由に使えるなどの実用上のメリットからも必ずUTF-8で書き、良い例で挙げたように文字エンコーディングを明示してやりましょう。


### CSSの`type`属性は省略する<span id="omit-type-attribute-for-css"></span>

HTMLでは、`style`要素における`type`属性の初期値は`text/css`です。

悪い例:

    <style type="text/css">
      ...
    </style>

良い例:

    <style>
      ...
    </style>

HTMLでは、CSSやJavaScriptを使って、HTMLだけでは実現できない多彩な表現や機能を提供できます。その場合、`style`や`script`要素を利用してCSSやJavaScriptをHTMLに追加することになります。

これまでは、悪い例で挙げたように`type`属性を使ってスタイルとスクリプトに使う言語を*必ず*明示する必要がありました。HTML 4.01では`type`属性が必須とされており、かつデフォルトの値が決まっていなかったからです。対して現在のHTMLでは`style`と`script`要素の内容は、それぞれデフォルトでCSSとJavaScriptとして解釈されることが明文化されました。

CSSとJavaScriptを使うならば良い例で挙げたように`type`属性を省略できます。しかし、もしかすると将来はより高度なスタイル言語やスクリプト言語を利用できるかもしれません。その場合には`type`属性を使って適切なMIMEタイプを指定してあげましょう。


### `style`要素の中をコメントアウトしない<span id="dont-comment-out-contents-of-style-element"></span>

この儀式は古いブラウザーのためです。

悪い例:

    <style>
    <!--
      ...
      -->
    </style>

良い例:

    <style>
      ...
    </style>

「[`script`要素の中をコメントアウトしない](#dont-comment-out-contents-of-script-element)」を参照してください。


### CSSとJavaScriptのタグを混ぜない<span id="dont-mix-tag-for-css-and-javascript"></span>

`script`要素はDOMの構築をブロックするかもしれません。

悪い例:

    <script src="/js/jquery.min.js"></script>
    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/main.js"></script>

良い例:

    <link href="/css/screen.css" rel="stylesheet">
    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>

同じく良い例:

    <script src="/js/jquery.min.js"></script>
    <script src="/js/main.js"></script>
    <link href="/css/screen.css" rel="stylesheet">

CSSファイルを参照する`link`要素やJavaScriptファイルを参照する`script`要素の記述順は特に決められていません。規模の大きなウェブサイトでは時に無作為に並べて書かれていることが多いようです。またCSSフレームワークやJavaScriptライブラリーを利用している場合も、悪い例で挙げたように分散してしまいます。

古いブラウザーではそのように書くとJavaScriptファイルの読み込みと実行で逐一ブロックされてしまうため、CSSファイルやJavaScriptファイルが並列ダウンロードされず、ウェブページの読み込みに時間がかかってしまいます。そのため最初の良い例で挙げたようにCSSファイルを先に読ませるように書くべきとされていました。しかし現行のブラウザーには[Speculative Parsing](https://developer.mozilla.org/en-US/docs/Web/HTML/Optimizing_your_pages_for_speculative_parsing)という仕組みが実装されており、バラバラに書いてもきちんと並列ダウンロードされます。こういった点ではそれぞれまとめるこのような書き方の意味は少なくなりました。

それでもCSSファイルをできうる限り早く読み込ませることで、そのパースが早く終わり、結果としてウェブページのレンダリング開始が早くなります。ブラウザーでは並行ダウンロードできる数に制限があることから、なるべくCSSファイルを優先して読み込ませるようにまとめて先に書くのはまだ有効なテクニックだと言えるでしょう。

またHTTP/2が普及したこれからは並行ダウンロードにほぼ制限がなくなるため、細かいファイルをそのままそれぞれ読み込ませたほうが効率が良くなるかもしれません。そういう場合でもゴチャゴチャに混ざったCSSファイルとJavaScriptファイルへの参照を管理するよりも、それぞれがまとまった形で書かれている方が管理しやすいはずです。

JavaScriptファイルを`async`属性付きで非同期に読み込む場合や、Web Componentsのことを考えると、これから少し変わっていきそうな部分です。それでも今のところはまとめて書いた方が無難でしょう。


## セクション

### `body`要素を書く<span id="add-body-element"></span>

ブラウザーは思っても見ない位置へ`body`要素を補完するかもしれません。

悪い例:

    <html>
      <head>
        ...
      </head>
      ...
    </html>

良い例:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

仕様ではやや難しい言い回しになっていますが、`body`タグは開始・終了ともに省略できます。`body`要素の最初が空白文字やコメントでなく、かつ特定の要素でもない場合に省略でき、ユーザー・エージェントはその位置に`body`要素を補完します。悪い例で挙げたようなコードでも、最近のブラウザーの開発者ツールの類で確認すると、`head`要素の終了タグの直後に`body`要素が追加されていることでしょう。この補完においては古いブラウザーのバグもありますが、もうこの点を気にすることはありません。

しかしJavaScriptによりHTML要素が追加されたりした結果、思ってもみない位置に`body`要素が補完されてしまうかもしれません。自身で書いたJavaScriptファイルではそのようなことはないでしょうが、サードパーティー製のウィジェットを導入するJavaScriptファイルでは十分にありえます。今は大丈夫でも、その更新により突然そうなることもありえるでしょう。

`html`や`head`要素を含め`body`要素も常に書くというルールは一般的で、わかりやすさという点でも多少メリットがあると考えられます。デメリットがないことと、少しではありますがバグに嵌る可能性があることを合わせて考えると、必ず書くと決めると簡単でしょう。ページ・サイズの節約などという観点で省略したい場合は、何かしらのツール（例えば[HTML minifier](http://kangax.github.io/html-minifier/)やCDNの最適化機能）を使って自動化するべきです。


### `hgroup`要素のことは忘れる<span id="forget-about-hgroup-element"></span>

あまり使われていません。

悪い例:

    <hgroup>
      <h1>HTML Best Practices</h1>
      <h2>For writing maintainable and scalable HTML documents.</h2>
    </hgroup>

良い例:

    <h1>HTML Best Practices</h1>
    <p>For writing maintainable and scalable HTML documents.</p>

仕様で挙げられているような例がピッタリくるようなコンテンツなら利用を考えても良いでしょう。しかし、現実としてなかなかそういう機会はありません。また、歴史的な事情から`hgroup`要素はほとんど使われていません。

この状況が容易に変化するとも思えず、あえて使うこともないでしょう。


### `address`要素は連絡先情報にのみ使う<span id="use-address-element-only-for-contact-information"></span>

`address`要素はメールアドレスやSNSアカウント、住所、電話番号など、実際に利用できるあなたとの連絡手段のための要素です。

悪い例:

    <address>No rights reserved.</address>

良い例:

    <address>Contact: <a href="https://twitter.com/hail2u_">Kyo Nagashima</a></address>

歴史的に`address`要素は様々な文章に使われてきました。元々HTML 4.01でも連絡手段のためのみとされていましたが、例示が悪く、付随する情報なども書いて良いものに見えたからです。悪い例で挙げたような著作権関連の情報への利用や、他には最終更新日の言及などがその例でしょう。

しかし、現在のHTML仕様では、厳格に連絡手段だけになりました。合わせて利用例も修正されたので、難しいことはないでしょう。最終更新日などへの言及も例示付きではっきりと禁じられています。

厳格化された理由に、ウェブページが複数人で運営されることが多くなったことがあります。そういった場合にセクションごとに`address`要素を使うことで、それぞれの文責を明確にできるわけです。


## グルーピングコンテンツ

### `pre`要素は改行で始めない<span id="dont-start-with-newline-in-pre-element"></span>

最初の改行はブラウザーに無視されますが、2番目以降はそのまま表示されます。

悪い例:

    <pre>
    &lt;!DOCTYPE html&gt;
    </pre>

良い例:

    <pre>&lt;!DOCTYPE html&gt;
    </pre>

改行が意味を持つ唯一の要素として`pre`要素があります。特に何もしなければ、この要素では改行は改行としてそのまま扱われ、ブラウザー上でも改行されます。ただし例外があり、*開始タグ直後の改行文字1つ*だけは削除されてしまいます。

    <pre><code>
    
    function isArray(o) {
      if (Object.prototype.toString.call(o) === "[object Array]") {
        return true;
      }

      return false;
    }</code></pre>

上記例では`pre`要素の最初に2つの改行文字がありますが、1つの改行、つまり1行分の空行しか表示されることはありません。常に削除されるというのならこの挙動を前提にしても良さそうですが、この挙動はHTML構文として扱われた場合に限って起こります。テンプレートによってウェブページが生成されることが多い現在、HTML構文であるかどうかはテンプレート次第で、いつの間にか変更が加わることもありえます。そのためこの挙動を前提にすることは危険が伴うでしょう。

    <pre><code>function isArray(o) {
      if (Object.prototype.toString.call(o) === "[object Array]") {
        return true;
      }

      return false;
    }</code></pre>

常にこのように改行を入れずに始めると、挙動の統一を図ることができます。これならコピー・アンド・ペーストにも強いでしょう。


### `blockquote`要素内でも適切な要素を使う<span id="use-appropriate-element-in-blockquote-element"></span>

`blockquote`要素の中身は引用で、単なる文字の連続ではありません。

悪い例:

    <blockquote>For writing maintainable and scalable HTML documents.</blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>

`blockquote`要素は、主に他のウェブページなどからの引用に使います。仕様の例示ではフォーラムでの投稿への返信にも使っていますが、それはかなり特殊なケースだと考えて良いでしょう。

引用ということは改変することは許されません。省略くらいは許可されるでしょうが、段落であれば段落として、そのまま持ってくるべきです。ウェブページからならば元のマークアップを維持するべきですし、紙の文献からならば適切にマークアップすることになるでしょう。いずれにしても悪い例で挙げたように中身がプレーンテキストではありません。

引用対象がプレーンテキストや実生活での会話である場合、`p`要素を始めとしたHTML要素で適切にマークアップすることが難しいかもしれません。そういった限られたケースではプレーンテキストでの引用にならざるを得ませんが、概ね良い例で挙げたようにマークアップしてやるべきです。


### `blockquote`要素内に帰属情報を含めない<span id="dont-include-attribution-directly-in-blockquote-element"></span>

`blockquote`要素の中身は引用です。

悪い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>

      <p>— HTML Best Practices</p>
    </blockquote>

良い例:

    <blockquote>
      <p>For writing maintainable and scalable HTML documents.</p>
    </blockquote>
    
    <p>— HTML Best Practices</p>

同じく良い例:

    <figure>
      <blockquote>
        <p>For writing maintainable and scalable HTML documents.</p>
      </blockquote>
    
      <figcaption>— HTML Best Practices</figcaption>
    </figure>

仕様でも2つの例示を通して帰属情報（引用元）のわかりやすい併記を行う方法を解説しています。`blockquote`要素は引用を意味し、その中には引用そのものしか含められないからです。悪い例で挙げたように書くとまとまっていますが、2つの`p`要素の扱いの違いを機械的に判断することは難しく、人ならぬ何かには混乱をもたらしてしまうかもしれません。

良い例で挙げたように必ず`blockquote`要素の外に出してやりましょう。これでも引用と引用元の対応関係は必ずしも明確ではありませんが、仕様で実装例として触れられていることから、適切に解釈されることを期待しても良いはずです。対応関係を明確にしたい場合は、冗長ですが、`figure`と`figcaption`要素を使うと良いでしょう。


### リスト項目は1行に1つずつ書く<span id="write-one-list-item-per-line"></span>

長ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーい行はとっっっっっっっっっっっっっっっっっっっっっっっっっっっても読みづらいです。

悪い例:

    <ul>
      <li>General</li><li>The root Element</li><li>Sections</li>...
    </ul>

良い例:

    <ul>
      <li>General</li>
      <li>The root Element</li>
      <li>Sections</li>
      ...
    </ul>

リスト項目や表のセル、メニュー項目などは、複数のデータ等を並列して列挙するために使われます。リスト項目やメニュー項目は、通常、項目ごとに縦並びでレンダリングされるため、良い例で挙げたように、1行に1つずつ書いてやるとより読みやすいHTML文書となるでしょう。

    <ol>
      <li>東京都</li>
      <li>神奈川県</li>
      <li>埼玉県</li>
      <li>千葉県</li>
    </ol>

対して表のセルはまとめて1行に書いてやるとコンパクトになるだけでなく、実際のレンダリングに近い形でソースを書けます。そう考えると直感的かもしれませんが、実際にはどうでしょうか。

    <table>
      <tbody>
        <tr><td>1</td><td>3</td><td>5</td></tr>
        <tr><td>2</td><td>4</td><td>6</td></tr>
      </tbody>
    </table>

データ自体はわかりやすい位置に並んでいると言えますが、間に挟まれるタグの多さが邪魔をするため、およそ直感的とは言えない結果になっています。リスト項目などとの一貫性も含め、こちらも1行に1つずつ書いていくのが良いでしょう。

リスト項目を横並びにするCSSの都合上、項目間に改行が入らないようにしたいということもままあります。そういった場合に限り1行にまとめて書くという妥協をしても良いですが、現在は改行に依存しない横並びにする手段がいくつかあるので、一貫して1行に1つと決めておくほうが紛れがなくなるでしょう。


### `ol`要素では`type`属性を使う<span id="use-type-attribute-for-ol-element"></span>

リスト・マーカーは周辺から参照される場合があります。`type`属性を使ってリスト・マーカーを変更すれば、安全に参照できるでしょう。

悪い例:

    <head>
      <style>
        .toc {
          list-style-type: upper-roman;
        }
      </style>
    </head>
    <body>
      <ol class="toc">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

良い例:

    <body>
      <ol type="I">
        <li>General</li>
        <li>The root Element</li>
        <li>Sections</li>
        ...
      </ol>
    </body>

`ol`要素を使い序列のあるリストを作成できますが、場合によってはデフォルトのアラビア数字以外をマーカーとして使いたいこともあるでしょう。このマーカーはCSSで`list-style-type`プロパティーを利用すると高度に制御できます。しかし、このCSSによるマーカーのスタイリングは、前後の段落でリストの項目を参照する時に問題が起こります。

前後の段落ではマーカーに使われた数字や文字を使って参照することになります。通常、CSSで当てたスタイルを前提として参照するわけです。例えば「いろは～」をマーカーにした場合、前後では「条件『ろ』においては～」などと書くことでしょう。しかし、何らかの理由でCSSが無効になっていると、参照に使われた文字と、実際に表示されているマーカーが食い違ってしまうことになります。

`ol`要素には`type`属性として何種類かマーカーのプリセットが用意されています。これを利用すればそういった食い違いは起こりません。残念ながら日本語向けのプリセットは用意されていませんが、できる限りこれらのプリセットを利用することで、環境に依存しないHTML文書を提供できます。


### `dl`を会話のために使わない<span id="dont-use-dl-for-dialogue"></span>

HTMLでは`dl`要素は関連付けリストに限定されています。

悪い例:

    <dl>
      <dt>Costello</dt>
      <dd>Look, you gotta first baseman?</dd>
      <dt>Abbott</dt>
      <dd>Certainly.</dd>
      <dt>Costello</dt>
      <dd>Who’s playing first?</dd>
      <dt>Abbott</dt>
      <dd>That’s right.</dd>
      <dt>Costello becomes exasperated.</dd>
      <dt>Costello</dt>
      <dd>When you pay off the first baseman every month, who gets the money?</dd>
      <dt>Abbott</dt>
      <dd>Every dollar of it.</dd>
    </dl>

良い例:

    <p>Costello: Look, you gotta first baseman?</p>
    <p>Abbott: Certainly.</p>
    <p>Costello: Who’s playing first?</p>
    <p>Abbott: That’s right.</p>
    <p>Costello becomes exasperated.</p>
    <p>Costello: When you pay off the first baseman every month, who gets the money?</p>
    <p>Abbott: Every dollar of it.</p>

HTML 4.01では、`dl`要素の利用例として会話をマークアップできる、と明言されていました。しかし現在のHTMLでは、会話のマークアップには不適切であると明言されました。元々あまり会話のマークアップに利用されていませんでしたが、現在のHTML仕様で加わった破壊的な変更のひとつであることや、`dl`要素が「名前と値」の組み合わせに限定されるという意識を強くするためにも覚えておくべきでしょう。

会話のマークアップについては適当なマークアップ方法は明示されていません。仕様では[いくつかの案](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations)が提示されており、良い例で挙げたものはそのひとつです。会話がどういう文脈で扱われているか、に依存して適切な要素は変化するので、慎重にマークアップしましょう。


### `figcaption`要素は`figure`要素の最初か最後に置く<span id="place-figcaption-element-as-first-or-last-child-of-figure-element"></span>

仕様では`figcaption`要素を`figure`要素の中ほどに置けません。

悪い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
    </figure>

良い例:

    <figure>
      <img alt="Front cover of the “HTML Best Practices” book" src="/img/front-cover.png">
      <img alt="Back cover of the “HTML Best Practices” book" src="/img/back-cover.png">
      <figcaption>“HTML Best Practices” Cover Art</figcaption>
    </figure>

`figcaption`要素は必須ではありませんが、多くの場合は書くことでしょう。`figure`及び`figcaption`要素は図や画像の注釈にだけでなく、あるコンテンツ（群）へ明示的にキャプションを提供するためにも使われるからです。`figure`要素は複数の図を持つかもしれないので、その場合にそれぞれにキャプションを付けたくなるかもしれません。

    <figure>
      <img
        alt="様々な花が咲き乱れている。"
        src="spring.jpg">
      <figcaption>春の庭</figcaption>
      <img
        alt="木の葉が色づき、落ちはじめている。"
        src="fall.jpg">
      <figcaption>秋の庭</figcaption>
    </figure>

文法として`figcaption`要素は`figure`要素の最初か最後の子要素にしかなれないという点でも問題がありますが、こういった場合には`figure`要素は2つの画像を関連付けてまとめたものと捉えるべきです。そして`figcaption`要素はその*まとまりへのキャプション*となるでしょう。

    <figure>
      <figcaption>季節による庭の変化</figcaption>
      <img
        alt="様々な花が咲き乱れている。"
        src="spring.jpg">
      <img
        alt="木の葉が色づき、落ちはじめている。"
        src="fall.jpg">
    </figure>

最初と最後のどちらに置くかは難しいところですが、少なくともこのようにひとまとまりとして捉えてキャプションをつけてやる必要があります。それぞれにキャプションを付けることそれ自体が重要である場合は、*さらに`figure`要素をネストしそれぞれの画像ごとに`figcaption`要素を使用*しましょう。


### `main`要素を使う<span id="use-main-element"></span>

`main`要素はコンテンツをまとめるために使えます。

悪い例:

    <div id="content">
      ...
    </div>

良い例:

    <main>
      ...
    </main>

CMSによる生成が主流となって以降、複数のセクションをまとめるために`div`要素が使われてきました。そういった`div`要素のうち、悪い例で挙げたようなものは`main`要素で置き換えることが可能です。HTML 4.01やXHTML 1.xでは`div`要素でどうにかしていたよくあるパターンを、現在のHTML仕様では新しい要素として定義されています。

`main`要素については何度か修正がなされています。現在は*文書の支配的なコンテンツ*をマークアップするもの、と定義されており、ひとつのHTML文書にひとつの`main`要素しか許されていません。以前の仕様で例示されていたような`section`要素内での利用はできなくなりました。

ブラウザー他でほぼ問題ないレベルまでサポートされています。積極的に使う理由を挙げられるわけではないですが、同時に使わない理由もほとんどありません。`div`要素ではなく、できる限り`main`要素を優先して使うことをお勧めします。ただし`main`要素は汎用的なラッパーのための要素ではないので、スタイル目的で使うべきものではありません。そういった場合には今まで通り`div`要素を使用するべきです。


### できる限り`div`要素は避ける<span id="avoid-div-element-as-much-as-possible"></span>

`div`要素は最後の手段です。

悪い例:

    <div class="chapter">
      ...
    </div>

良い例:

    <section>
      ...
    </section>

仕様では`div`と`span`要素は何も意味しないとなっています。理論上は`div`と`span`要素に加えて`a`要素及びフォーム・コントロール要素だけでウェブページを制作できますが、こういったHTMLはメンテナンス性に大きく欠けるでしょう。

`div`と`span`要素は、歴史的にコンテンツをグルーピングするために様々な形で利用されてきました。例えば、以前、ブログ記事は以下のようにマークアップされていたはずです。

    <div id="contents">
      <div class="entry">
        ... <span class="published">1905年</span> ...
      </div><!-- /.entry -->
      ...
    </div><!-- /#contents -->

開始タグについては、概ね特徴的なクラス名が振られていることからあまり問題ありませんが、終了タグは常に`</div>`でしょうから、その対応を把握するのはなかなか難しくなります。そのためこのように終了タグ付近にその対応をコメントとして埋め込む、といった対処をする必要が出てくるでしょう。

現在のHTML仕様では、こういった`div`や`span`要素を置き換える専用の要素が追加されました。

    <main>
      <article>
        ... <time datetime="1905">1905年</time> ...
      </article>
      ...
    </main>

恣意的な例ではありますが、公開日時は`time`要素で、記事全体は`article`要素で、複数の記事をまとめるには`main`要素を、それぞれ利用できます。これならば容易にHTML文書の構造を把握でき、保守、そして更新できるでしょう。

もちろん、スタイル目的でそれぞれに改めて`class`属性を振るので、`div`要素でも同じではないか、と考えがちですが、HTMLはCSSのためだけにあるわけではありません。適切な要素を利用することで、正しくコンテンツを解釈する機会を公平に与えられます。ブラウザーのリーダー・モード、スクリーン・リーダー、そしてもしかしたらGoogleにも、です。

仕様でも`div`要素の項にて「最後の手段としてdiv要素を検討する」ことが強く推奨されています。できうる限り既存の他の適切な要素を利用するようにしましょう。


## テキストレベルセマンティックス

### グループ化できるリンクは分割しない<span id="dont-split-same-link-that-can-be-grouped"></span>

`a`要素はほとんどの要素（フォームコントロールのようなインタラクティブ要素や`a`要素自身以外）を括れます。

悪い例:

    <h1><a href="https://whatwg.org/">WHATWG</a></h1>
    
    <p><a href="https://whatwg.org/">A community maintaining and evolving HTML since 2004.</a></p>

良い例:

    <a href="https://whatwg.org/">
      <h1>WHATWG</h1>
    
      <p>A community maintaining and evolving HTML since 2004.</p>
    </a>

現在のHTMLでは、`a`要素の自由度が高くなりました。インタラクティブな要素（`a`要素やフォーム要素）以外のほとんどすべての要素を括れます。実際には古いブラウザーでそのような挙動だったため、仕様がそれに近づいた形ですが、明示的に仕様で定められたことにより、今は安心して利用できるでしょう。

このことはユーザビリティーの面でもメリットがあります。悪い例で挙げたような書き方だと、見出しと概要の間にある余白がリンクになりません。リンクにするためには特別に余白を`padding`プロパティーで行うなどの対処が必要です。対して良い例で挙げたような書き方では、概ね全体がリンクになります。こういった余白がリンクになっていると、モバイル機器のように`:hover`相当のインタラクションが存在しない場合でもリンクを扱いやすくなるでしょう。またスクリーン・リーダーで何回も同じリンクが読み上げられないという点でもユーザーに優しいはずです。


### リソースをダウンロードさせる場合は`download`属性を使う<span id="use-download-attribute-for-downloading-a-resource"></span>

こうすることでダウンロードするリンク先のリソースを確実にローカルに保存させられます。

悪い例:

    <a href="/downloads/offline.zip">offline version</a>

良い例:

    <a download href="/downloads/offline.zip">offline version</a>

ブラウザーはリンク先のリソースについて予測しません。実際にアクセスし、その時に返される`Content-Type`ヘッダーに従って処理します。本来ならばサーバーがリソースを正しい`Content-Type`ヘッダーで返すべきですが、様々な理由によって設定できないこともあるでしょう。例えばGitHub Pagesなどでは自由に設定できません。

このことはブラウザーで開くリソース（HTML文書や画像ファイル、PDFドキュメントなど）ではあまり問題になりませんが、ZIPファイルやインストーラーなど、ユーザーにダウンロードさせたいファイルでは問題になります。間違った`Content-Type`ヘッダーがついていると、無理やりブラウザーで開かれ、意味不明な文字が表示されてしまうでしょう。これではユーザーはどうしていいかわかりません。

良い例で挙げたように書くと、最近のブラウザーではダウンロードされることが保障されます。ブラウザーで無理やり開かれる場合と比べてセキュリティーの問題も減るので、ダウンロードさせたいリソースにはこのように指定してやりましょう。


### `rel`や`hreflang`、`type`属性を必要ならば使う<span id="use-rel-hreflang-and-type-attribute-if-needed"></span>

これらのヒントは、アプリケーションがリンク先のリソースをどう扱えば良いのかの助けになります。

悪い例:

    <a href="/ja/pdf">Japanese PDF version</a>

良い例:

    <a href="/ja/pdf" hreflang="ja" rel="alternate" type="application/pdf">Japanese PDF version</a>

`a`要素には[`download`属性](#use-download-attribute-for-downloading-a-resource)以外にもリンク先のリソースについての情報を提供する属性があります。悪い例で挙げたように書くと、そのページの日本語版PDFドキュメントへのリンクを張れますが、リンク先が日本語なのかどうか、PDFドキュメントなのかどうか、そもそも何の「Japanese PDF version」なのか、はっきりしません。このことは検索エンジンのクローラーやスクリーン・リーダーには致命的です。

良い例で挙げたように書くと、リンク先について以下の点がはっきりします。

- 日本語であること
- このページの別バージョンであること
- PDFドキュメントであること

こうしておけばどのような環境からもリンク先がどのようなものかわかり、どのように扱えば良いかわかるでしょう。`hreflang`属性は例えばウェブサイトの言語選択メニューにも利用できます。必ず指定すべき属性ではありませんが、どのように使うものかを覚え、必要な時は忘れないようにしましょう。


### リンク文字列は明確にする<span id="clear-link-text"></span>

リンク文字列はリンク先のリソースのラベルであるべきです。

悪い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

良い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>

リンクはウェブページにのみ張られるものではありません。ポップアップ・ウィンドウを出したり、ダウンロードさせたり、最近では別のアプリを立ち上げるために張られることもあります。明確な文字列でリンクされていれば、そのリンクを利用するとどのようなことが起こるか、をユーザーが推測できます。

そのユーザーには検索エンジンも含めて良いでしょう。検索エンジンが自然文をうまく扱える現在、明確な文字列によるリンクは、ウェブページ同士の関係をも推測可能にします。そのことがひいては検索エンジンおよびそのユーザーの利益につながるかもしれません。

明確に、とは、良い例で挙げたように、リンクの目的について端的に表現することです。悪い例で挙げたように、リンクの使い方について表現することではありません。


### `em`要素を警告や注意に使わない<span id="dont-use-em-element-for-warning-or-caution"></span>

それらは深刻なものです。ですから`strong`要素の方がより相応しいはずです。

悪い例:

    <em>Caution!</em>

良い例:

    <strong>Caution!</strong>

HTML 4.01では、`em`と`strong`要素はどちらも強調で、その度合いだけが違うものでした。対して現在のHTMLでは、強調は`em`要素になり、`strong`要素は用途が変わり、重要性や深刻さ、緊急性を意味するものになりました。警告や注意は深刻なもののため、良い例で挙げたように`strong`要素が適切になります。

より強い強調を表現する場合は`em`要素をネストします。同じようにより高い重要性を表現する場合は`strong`要素をネストします。このことは仕様の例示でも触れられており、具体的には以下のようにマークアップすることになるでしょう。

    <p><em>猫はとても<em>可愛い</em>動物です！</em></p>

ニュアンスが難しいところもありますが、表現が多彩になったととらえるべきです。`mark`要素と合わせてうまく使い分けましょう。


### できる限り`s`や`i`、`b`、`u`要素を避ける<span id="avoid-s-i-b-and-u-element-as-much-as-possible"></span>

これらの要素のセマンティックスは人類には難しすぎます。

悪い例:

    <i class="icon-search"></i>

良い例:

    <span class="icon-search" aria-hidden="true"></span>

HTML 4.01時代には俗に*物理要素*と言われていた要素達は、現在のHTML仕様では削除されるか、その意味合いを再定義されました。`big`や`center`要素などが削除された要素で、`b`や`small`要素などが意味合いが変更された要素です。中でも`s`や`i`、`b`、`u`要素はその意味合いが大きく変更され、その使い方はとても難しいものになりました。

例えば`i`要素は「代わりの声やムードでテキストの範囲を表す」とされています。具体的な使用例もありますが、他の要素が適切でありそうなものであったり、そもそもマークアップしてやる意味が薄いものであったりするでしょう。仕様の例示で触れられている「多言語の慣用句」は、多くの場合は文脈として自然に使われるものであるはずで、まずマークアップする必要はないでしょう。

これらの要素は物理要素であった頃の名残りとして、デフォルトでブラウザーから様々なスタイルが割り当てられています。利用の際には適切な形でスタイルを変更してやる必要が出てくる可能性が高く、そういった点でも取り扱いが難しいでしょう。

一部のライブラリーでは`i`要素をなんとアイコンの用途に使っています。まさか「icon」の「i」というわけではないでしょうが、悪い例で挙げたような利用は避けるべきです。


### `q`要素内へ引用符は置かない<span id="dont-put-quotes-to-q-element"></span>

引用符はブラウザーが提供します。

悪い例:

    <q>“For writing maintainable and scalable HTML documents”</q>

良い例:

    <q>For writing maintainable and scalable HTML documents</q>

同じく良い例:

    “For writing maintainable and scalable HTML documents”

段落内で他のソースから引用を行う場合に使う`q`要素では、引用符は主にブラウザー（もしくはCSS）によって提供されます。仕様では明確に`q`要素の内部等に引用符が「現れてはならない」とされています。

    <p>漱石はその小説内で猫の鳴き声を<q>ニャーニャー泣いていた</q>としている。</p>

また、どのような引用符で括られるかは、ブラウザーによってもそうですが、HTML文書の言語指定によっても変化することがあります。例えばGoogle Chrome 43では言語指定が英語（en）の場合は“と”で、日本語（ja）の場合は「と」で括られます。この挙動は、日常生活で引用の時に使われる記号の言語間における差異を吸収してくれることになります。

もし、どうしても引用符を完全に制御したいと考えているのならば、*引用符を`q`要素の代わりに*直接記述します。

    <p>漱石はその小説内で猫の鳴き声を『ニャーニャー泣いていた』としている。</p>

仕様でもこのように`q`要素を使わず明示的に引用符を使用しても良いとされています。`q`要素を使うべきかどうかは判断が難しいところではありますが、間違った使い方だけはしないようにしましょう。


### `abbr`要素へ`title`属性を追加する<span id="add-title-attribute-to-abbr-element"></span>

他に完全表記を提示する方法がありません。

悪い例:

    <abbr>HBP</abbr>

良い例:

    <abbr title="HTML Best Practices">HBP</abbr>

略語に対して常に`abbr`要素を使ってマークアップする必要はありません。例えばウェブ開発者向けの文書において、常に「HTML」を`abbr`要素を使ってマークアップするのは馬鹿げています。`abbr`要素はいくつかの状況において有用であると仕様でも言及されており、その状況の時だけ使います。

1. 完全表記を括弧付きで書く代わりに単に提示したいだけ場合
2. なじみが薄い略語であり、括弧によって完全表記に対応する略語として提示すると良い場合
3. 略語へ特別なスタイルを当てたい場合

完全表記を本文内に持たずに提示したいという1のケースはあまりないでしょうし、3のスタイル目的ではまた別のアプローチも存在しえます。主に2の「なじみに薄い略語」に使うことになるでしょう。

悪い例で挙げたようにマークアップしてやること自体は間違いではありませんが、この「HBP」が何の略語かは前後を考慮する必要があります。「HTML Best Practices」の略かもしれませんが、「HTML BoilerPlate」の略かもしれません。

    HTML Best Practices (<abbr title="HTML Best Practices">HBP</abbr>)

このように完全表記をまず提示し、その略語を書くことで、よりわかりやすい文章になることは確実でしょう。その時に`abbr`要素をこう使うことで、括弧内が略語であることを明示できます。ただ、この書き方はかなり冗長なので、良い例で挙げたようにブラウザーが持つ`title`属性のツールチップなどによる展開機能を期待しても良いでしょう。いずれにせよ`abbr`要素が必要になるケースでは、ほぼ`title`要素も書くことになります。


### `ruby`要素は冗長にマークアップする<span id="markup-ruby-element-verbosely"></span>

`ruby`要素のサポートはまだモダンブラウザー間でも完了していません。

悪い例:

    <ruby>HTML<rt>えいちてぃーえむえる</ruby>

良い例:

    <ruby>HTML<rp> (</rp><rt>えいちてぃーえむえる</rt><rp>) </rp></ruby>

`ruby`要素群はフリガナをマークアップできます。その表示に多くの不具合がありますが、基本的なサポートは揃っており、必要ならば積極的に利用すべきです。しかし、インラインでプレーンテキストが挟まる結果、そのサポート状況に表示が強く依存してしまうので、マークアップは慎重に行うべきでしょう。

悪い例で挙げたように書いても、`ruby`要素群を完全にサポートしているアプリケーションでは問題ありません。しかし、サポートが完全でないアプリケーションでは、テキストとそのフリガナがつながった「HTMLえいちてぃーえむえる」という文字列になってしまうかもしれません。CSSを工夫すれば、`rt`要素をサポートしている場合は表示してやることもできるかもしれません。ですが、そういった古い環境への対策はCSSをむやみに複雑化するので、あまりおすすめできません。

良い例で挙げたように冗長にマークアップしておくと、完全なサポートがあればフリガナで、そうでない場合は「HTML (えいちてぃーえむえる)」と表示されます。こうすることでどんな環境でも違和感のない結果を提供できるでしょう。


### 機械的に解釈可能でない`time`要素では`datetime`属性を追加する<span id="add-datetime-attribute-to-non-machine-readable-time-element"></span>

`datetime`属性を使わない場合、`time`要素の中身は限定されます。

悪い例:

    <time>Dec 19, 2014</time>

良い例:

    <time datetime="2014-12-19">Dec 19, 2014</time>

`time`要素は日時をマークアップしますが、そのコンテンツは[既定のフォーマット](https://html.spec.whatwg.org/multipage/text-level-semantics.html#datetime-value)に従う必要があります。`datetime`属性があるならばかなり自由に — 「誕生日」や「あの日」、「夕飯時」など主観的な日時の表現でも許可されることに — なります。

既定のフォーマットは俗にW3CDTFと呼ばれている形式に近いものです。ただし年なしの月日が許可されていたり、時刻のみが許可されていたり、上位互換で自然文向けのフォーマットになっています。いずれにせよ、日時を表現するには、それなりに書きやすくパースしやすいものです。しかし読みやすいとは言えない程度に素っ気ないものでもあります。そのため良い例で挙げたように（ロケールに応じた）わかりやすそうな表現で日時を提供し、`datetime`属性で正確な日時を提供すると、公平に日時を伝えられるでしょう。


### コードの言語は`class`属性で`language-`で始めることで指定する<span id="specify-code-language-with-class-attribute-prefixed-with-language"></span>

これは正式な方法ではありませんが、仕様では言及されています。

悪い例:

    <code>&lt;!DOCTYPE html&gt;</code>

良い例:

    <code class="language-html">&lt;!DOCTYPE html&gt;</code>

あらゆるコード断片は、何らかのプログラミング言語のコード断片であるはずです。できればそのプログラミング言語を表現する属性があればよかったのですが、残念ながら仕様では用意されていません。しかし同時にPascalのコードを例に`class`属性で`language-pascal`という値を指定して表現しても良い、と例示されてもいます。

多くのマークアップ・ジェネレーターでも採用されており、事実上の業界標準でしょう。また、場合によってはJavaScriptとCSSによる構文強調も期待できます。後々追加できるようなものではないため、今は必要なくてもできうる限り追加しておくと良いでしょう。


### できる限り`kbd`要素はシンプルにする<span id="keep-kbd-element-as-simple-as-possible"></span>

入れ子にした`kbd`要素は人類には難しすぎます。

悪い例:

    <kbd><kbd>Ctrl</kbd>+<kbd>F5</kbd></kbd>

良い例:

    <kbd>Ctrl+F5</kbd>

`kbd`要素は、うまく組み合わせると複雑なキー入力を正確に表現できます。しかしその結果として悪い例で挙げたようにとても煩雑なものになってしまいます。これが実際に何かの役に立つかどうかは未知の世界ですが、仕様の例示では良い例で挙げたように簡潔なものでも構わない、とされています。

[`ruby`要素の場合](#markup-ruby-element-verbosely)は既に存在する環境への配慮として、複雑にするべきでした。しかし、`kbd`要素の場合はまだ存在しない環境への配慮になります。コストの割りに得るものがなく、将来も得られるかわからないため、割り切ってしまって良いでしょう。


### できる限り`span`要素は使わない<span id="avoid-span-element-as-much-as-possible"></span>

`span`要素は最後の手段です。

悪い例:

    HTML <span class="best">Best</span> Practices

良い例:

    HTML <em>Best</em> Practices

「[できる限り`div`要素は避ける](#avoid-div-element-as-much-as-possible)」を参照してください。


### `br`要素の後ろでは改行する<span id="break-after-br-element"></span>

`br`要素が使われる場所には、間違いなく改行が必要です。

悪い例:

    <p>HTML<br>Best<br>Practices</p>

良い例:

    <p>HTML<br>
    Best<br>
    Practices</p>

HTMLコードにおいて改行を必要とするケースはほとんどありません。`pre`要素内での改行が唯一と言って良いでしょう。ただし、読みやすいHTMLコードを書くためには、それなりに改行を入れるべきです。多くの場合は終了タグの後ろに入れますが、それに加えて`br`要素でも改行を入れたほうが良いでしょう。

    <p>3-2-2 Kasumigaseki<br>Chiyoda-ku<br>Tokyo</p>

このように続けて書いてもきちんと表示されますが、これでは`br`要素をそこで改行させるための要素として扱ってしまっています。単純に読みにくいという理由を置いておいても、これではこの改行がコンテンツの一部として必要不可欠であることは伝わりにくいでしょう。

    <p>3-2-2 Kasumigaseki<br>
    Chiyoda-ku<br>
    Tokyo</p>

ソース上でも改行し、コンテンツをできうる限り直截的に伝わるようにしておくと良いはずです。そうすることで、レイアウトの都合などの理由により必要不可欠であるはずの改行が消されてしまうといった問題を避けられるはずです。


### 見た目だけのために`br`要素を使わない<span id="dont-use-br-element-only-for-presentational-purpose"></span>

`br`要素は改行のためにあるのではなく、コンテンツに必要な改行のためにあります。

悪い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label><br>
    <label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

良い例:

    <p><label>Rule name: <input name="rule-name" type="text"></label></p>
    <p><label>Rule description:<br>
    <textarea name="rule-description"></textarea></label></p>

改行をするために`br`要素があるわけではなく、改行をマークアップするためにこの要素を使います。詩に必要な改行や、手紙の住所表記で必要になる改行などに利用するものです。

悪い例で挙げたフォーム要素の間にある最初の`br`要素は、*テキスト入力ボックスの後ろで改行したい*から見た目上の都合で加えたものでしょう。対して2つめの`br`要素は、*複数行に渡る入力エリアをインライン入力と区別するために改行が必要*だから加えたものかもしれません。前者は根拠に欠けますが、後者はコンテンツに必要な改行とみなせます。

`br`要素はコンテンツに存在すべきである改行を表現するものだ、ということで、それ以上でもそれ以下でもありません。単純な見た目上の改行の制御にはCSSを利用すると良いでしょう。


## 編集

### `ins`や`del`要素は他の要素をまたがせない<span id="dont-stride-ins-and-del-element-over-other-elements"></span>

要素は他の要素をまたげません。

悪い例:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</p>
    
    <p>Don’t trust!</p></del>

良い例:

    <p>For writing maintainable and scalable HTML documents.<del> And for mental stability.</del></p>
    
    <del><p>Don’t trust!</p></del>

編集したことを明示的に残すため、`ins`や`del`要素を使うことは大切ですが、その編集により文章の構成が変わってしまうことがあります。例えば日本語では、修正により、文の締め方だけでなく、次の文の頭に接続詞を追加したりするでしょう。場合によっては段落をまたいで修正する必要が出てくるわけです。

単純に考えると編集箇所を括るようにマークアップすれば良いように思えます。しかし悪い例で挙げたように要素をまたいで`ins`や`del`要素は使えません。この場合は`p`要素をまたいでおり、正常にタグが閉じられていない（この例では`ins`要素の終了タグがない）とみなされてしまいます。

良い例で挙げたように要素内で完結するように分割してマークアップします。`ins`と`del`要素では他にも文法上は間違いではないにも関わらず、特定の条件下では推奨されない書き方があります。できるかぎり分割してマークアップすると、そういった推奨されない書き方もうまく避けられるでしょう。


## エンベディッドコンテンツ

### `picture`要素ではフォールバックのための`img`要素を提供する<span id="provide-fallback-img-element-for-picture-element"></span>

`picture`要素のサポートはまだよくありません。

悪い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <source srcset="/img/logo.jpg" type="image/jpg">
    </picture>

良い例:

    <picture>
      <source srcset="/img/logo.webp" type="image/webp">
      <source srcset="/img/logo.hdp" type="image/vnd.ms-photo">
      <source srcset="/img/logo.jp2" type="image/jp2">
      <img src="/img/logo.jpg">
    </picture>

現在のHTML仕様では、`picture`要素を始め、いくつかのマルチメディア向け要素が追加されました。この新しい要素では、複数のソースから最適なものを選択、表示できます。悪い例で挙げたようなコードでは`source`要素をサポートしているのなら最悪でもJPEG形式の画像が表示されるでしょう。こうなっていることでサポート状況が不安な新しいフォーマットでも気軽に利用できます。

しかし、このままでは`source`要素をサポートしていないブラウザーでは何も表示できません。そこで最後のフォールバックとして`img`要素を使えるように仕様では決められました。良い例で挙げたように書くことで、適切なフォーマットを選ぶ自由さを維持しつつ、古いブラウザーでは`img`要素で指定された画像が表示されます。このフォールバックの仕組みが必要なブラウザーはごく少数になりつつありますが、`source`要素を書く場合と手間は変わらないことですし、`img`要素で書くべきでしょう。


### 必要な時は`img`要素へ`alt`属性を追加する<span id="add-alt-attrbute-to-img-element-if-needed"></span>

`alt`属性は、画像を表示できなかったり、画像の読み込みを無効にしている環境へ助けになります。

悪い例:

    <img src="/img/logo.png">

良い例:

    <img alt="HTML Best Practices" src="/img/logo.png">

仕様で[明言されているように](https://html.spec.whatwg.org/multipage/images.html#alt)、何らかの事情がない限り、`alt`属性は必ず指定すべきで、空であってもいけません。ここに異論の余地はまったくないでしょう。ネットワークが不安定でHTML文書はダウンロードできても画像ができない場合、`alt`属性がきちんと書かれていればコンテンツの閲覧を助けられます。もちろん画像のダウンロードを無効にしているユーザーにも公平ですし、スクリーン・リーダーではその値を使って読み上げてくれます。

`alt`属性の値は単なる画像の説明ではなく、その画像が`img`要素で使われている位置ではどのように扱われているかを端的に示したものであるべきです。つまりまったく同じ画像でも違う`alt`属性を持つことは十分にあり得ます。このあたりのことについては慣れを要しますが、前後のコンテンツに続けて`alt`属性の値を読み上げても違和感がないかというあたりを基準にして考えると良いでしょう。


### 可能ならば`alt`属性は空にする<span id="empty-alt-attribute-if-possible"></span>

画像が補助的なものならば、きっと周囲に同等のコンテンツが存在するはずです。

悪い例:

    <img alt="Question mark icon" src="/img/icon/help.png"> Help

良い例:

    <img alt="" src="/img/icon/help.png"> Help

`alt`属性は必須ですが、その値を空にすべきケースも存在します。難しい言い方をすれば、周囲に`alt`属性で指定されるべき値と同等のコンテンツが存在する時、です。そういう画像は補助的なものであり、コンテンツ全体へは寄与することはありません。スクリーン・リーダーでの読み上げを想像するとわかりやすいでしょう。周囲に同等のコンテンツが存在する場合、同じことを（場合によっては何度も）繰り返すことになってしまいます。

例えばアイコン付きのメニュー項目です。アイコンと、その前後にあるラベルは、ほぼ同等の意味を持ちます。そのため悪い例で挙げたように書いてしまうと、コンテンツが重複してしまうでしょう。良い例で挙げたように空にすべきです。グラフの提示に`img`要素使っており、かつその前後でそのグラフについて細かく解説している場合も空にすべきです。これも同等のコンテンツが周囲に存在すると考えられます。

「補助的」という言葉は曖昧で、判断に迷うこともあります。ブラウザーやOSに内蔵されているスクリーン・リーダーをうまく使って確認し、適切な値を`alt`属性へ指定しましょう。


### 可能ならば`alt`属性は省略する<span id="omit-alt-attribute-if-possible"></span>

たまにどのような文字列が適切な`alt`属性の値かわからない場合もあります。

悪い例:

    <img alt="CAPTCHA" src="captcha.cgi?id=82174">

良い例:

    <img src="captcha.cgi?id=82174" title="CAPTCHA">
    (If you cannot see the image, you can use an <a href="?audio">audio</a> test instead.)

必須であるはずの`alt`属性も、ごく限られた状況では使うべきではありません。というよりも適切な`alt`属性の値がどうやっても指定できない場合には指定できません。

例えばCAPTCHAの画像です。このサービスの仕組み上、その中身を機械的にたどれるようでは無意味になってしまうからです。こういった場合は良い例で挙げたように、何も指定せず、かつ別の方法でフォールバックするべきです。

他には、ユーザーがアップロードした画像をサービスがマークアップして表示する場合も指定すべきではありません。ユーザーからその画像について説明を受けない限り、どのような写真でどのような意図をもっているのかを確定できないからです。一部で画像を機械学習で処理することで`alt`属性の値を生成する試みもありますが、`alt`属性の値が画像の説明ではないことを考えると、あくまでも次善の策でしょう。画像の閲覧者に誤解させないようにするためにも省略するもの、と考えた方が無難です。

`alt`属性を省略する場合も、ただ省略するだけで良いわけではありません。`figcaption`要素によるキャプションか、良い例で挙げたように`title`属性による画像そのものの簡単な説明が必要です。


### `iframe`要素の中は空にする<span id="empty-iframe-element"></span>

その内容にはいくつかの制限があります。空にすれば安全です。

悪い例:

    <iframe src="/ads/default.html">
      <p>If your browser support inline frame, ads are displayed here.</p>
    </iframe>

良い例:

    <iframe src="/ads/default.html"></iframe>

HTML 4.01では、フレームをサポートしないブラウザーが考慮されていました。`iframe`要素では、代替コンテンツをそのコンテンツとして指定する、と指示されています。

    <iframe src="foo.html">
      こちらの<a href="foo.html">関連文書</a>を御覧ください。
    </iframe>

多くはこのように`src`属性で参照している文書へのリンクを表示するだけであり、ブラウザー側でどうにかできるようなものです。実際にフレームをサポートしないLynxでは、リンク先の文書をインラインに表示する代わりに、リンクとして表示します。スクリーン・リーダーの場合はそもそもインラインでリンク先のコンテンツの読み上げに移るため、代替コンテンツが使われることはありません。

現在のHTMLでは、`iframe`要素のコンテンツ・モデルはもっと複雑なものになりましたが、重要なのはXML文書であった場合には「空であるべき」とされたことです。場合によっては`iframe`要素のコンテンツとして代替コンテンツを指定することはできなくなります。

    <iframe src="foo.html"></iframe>

使い分けるということも難しいですし、ほとんど形骸化した代替コンテンツを提供する意味はもはやありません。`iframe`要素の中身は空にしておきましょう。


### `map`要素の中はマークアップする<span id="markup-map-element-content"></span>

その中身はスクリーン・リーダーへ提供されます。

悪い例:

    <map name="toc">
      <a href="#general">General</a>
      <area alt="General" coords="0, 0, 40, 40" href="#General"> |
      <a href="#the_root_element">The root element</a>
      <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
      <a href="#sections">Sections</a>
      <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
    </map>

良い例:

    <map name="toc">
      <p>
        <a href="#general">General</a>
        <area alt="General" coords="0, 0, 40, 40" href="#General"> |
        <a href="#the_root_element">The root element</a>
        <area alt="The root element" coords="50, 0, 90, 40" href="#the_root_element"> |
        <a href="#sections">Sections</a>
        <area alt="Sections" coords="100, 0, 140, 40" href="#sections">
      </p>
    </map>

クリッカブル・マップを作成する`map`要素の中身は、`area`要素さえあれば機能します。そのため、悪い例で挙げたように書いてもブラウザーでは問題なく利用できます。必要なのは`area`要素の`coords`と`href`属性だけ、というわけです。

しかし、ブラウザーでないツールでは話が変わってきます。例えばスクリーン・リーダーは、その仕組み上インタラクティブにクリッカブル・マップを扱うことは難しいでしょう。そのため`map`要素の中身を普通のコンテンツとして読み上げます。良い例で挙げたように`p`要素で済む場合もありますが、`ol`要素を使ったり、場合によっては`table`要素を使うかもしれません。いずれにせよきちんとマークアップしないと、適切に読み上げられないでしょう。


### `audio`や`video`要素にフォールバックのためのコンテンツを提供する<span id="provide-fallback-content-for-audio-or-video-element"></span>

HTMLで新しく作られた要素にはフォールバックのためのコンテンツが必要です。

悪い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
    </video>

良い例:

    <video>
      <source src="/mov/theme.mp4" type="video/mp4">
      <source src="/mov/theme.ogv" type="video/ogg">
      ...
      <iframe src="//www.youtube.com/embed/..." allowfullscreen></iframe>
    </video>

「[`picture`要素ではフォールバックのための`img`要素を提供する](#provide-fallback-img-element-for-picture-element)」を参照してください。


## テーブルデータ

### 1行に1つのセルを書く<span id="write-one-cell-per-line"></span>

長い行は把握しづらいです。

悪い例:

    <tr>
      <td>General</td><td>The root Element</td><td>Sections</td>
    </tr>

良い例:

    <tr>
      <td>General</td>
      <td>The root Element</td>
      <td>Sections</td>
    </tr>

「[リスト項目は1行に1つずつ書く](#write-one-list-item-per-line)」を参照してください。


### 見出しセルには`th`要素を使う<span id="use-th-element-for-header-cell"></span>

避ける理由はないでしょう。

悪い例:

    <table>
      <thead>
        <tr>
          <td><strong>Element</strong></td>
          <td><strong>Empty</strong></td>
          <td><strong>Tag omission</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong><code>pre</code></strong></td>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <td><strong><code>img</code></strong></td>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>

良い例:

    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Empty</th>
          <th>Tag omission</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><code>pre</code></th>
          <td>No</td>
          <td>Neither tag is omissible</td>
        </tr>
        <tr>
          <th><code>img</code></th>
          <td>Yes</td>
          <td>No end tag</td>
        </tr>
      </tbody>
    </table>

表で最初の行や列をヘッダーとして使い、各行や列にどのようなデータが表示されるのかを示したいこともあるでしょう。しかしその場合も、悪い例で挙げたように`td`要素で`strong`要素を使ったり、クラス名を振ったりして、見た目だけを変更している場合がほとんどです。

ヘッダー・セルには`th`要素が使えます。振る舞いとしては特に何もせず、ブラウザーによりスタイルが割り当てられているくらいしか`td`要素との違いはありません。しかしながら`th`要素を使うことでしかヘッダー・セルであることは示せません。

最初の行をすべてヘッダー・セルとして扱う場合は`thead`要素を使うだけでも十分です。ただし良い例で挙げたように最初の*列*もヘッダーにしたい場合は`th`要素を使うしかありません。また、`thead`要素にはヘッダー以外のセルが（ごくまれに）含まれるため、そういった点でも`thead`要素だけでなく`td`と`th`要素を使い分けるべきでしょう。そうすることでありとあらゆるツールがヘッダー・セルと普通のセルを明確に区別できるようになります。

また`th`要素固有の属性もいくつかあります。`scope`や`abbr`属性がそれです。例えば`scope`属性を利用すると、そのヘッダー・セルの支配下にあるセルを明示でき、複雑にセルが組み合わさっている表でもその構造をうまく表現できます。今のところこれらの属性をブラウザーなどが解釈して何かしらの機能を提供しはしませんが、今後は可能性があるかもしれません。将来的な展望という点でも、ヘッダー・セルでは`th`要素を使うべきでしょう。


## フォーム

### フォームコントロールは`label`要素で括る<span id="wrap-form-control-with-label-element"></span>

`label`要素はフォーム要素へフォーカスを当てるのに役立ちます。

悪い例:

    <p>Query: <input name="q" type="text"></p>

良い例:

    <p><label>Query: <input name="q" type="text"></label></p>

`label`要素を使うことでフォーム要素とラベルの対応を明示できます。それだけでなく、多くのブラウザーではラベルをクリックすると、対応するフォーム要素へフォーカスを移してくれます。特に、チェックボックスやラジオボタンのように小さなものでは効果的に利用できます。チェックボックスそのものだけでなく、ラベルをクリックすることでもチェックを切り替えられるからです。

この対応関係は`for`属性を使うことで確実にできますが、`label`要素の子にフォーム要素を配置することでも可能です。ラベルそのものをクリックした時の挙動に両者はほとんど違いはありませんが、フォーム要素を子に配置する方がラベルそのもの以外でクリックできる範囲が大きくなるかもしれません。

HTMLを出力するツールや、CSSを使ったレイアウトの都合で、`for`属性を使うことは構いません。しかし、できる限り括ってやることで簡潔でわかりやすいHTMLコードに、そして使いやすいウェブページになるはずです。また、ウェブページごとにユニークであるべき`id`属性の値を考えずに済むので、ウェブサイトごとにそういったユニークな値を管理せずに済むという点も見逃せないでしょう。


### 可能ならば`for`属性は省略する<span id="omit-for-attribute-if-possible"></span>

`label`要素はいくつかのフォーム要素を含められます。

悪い例:

    <label for="q">Query: </label><input id="q" name="q" type="text">

良い例:

    <label>Query: <input name="q" type="text"></label>

「[フォームコントロールは`label`要素で括る](#wrap-form-control-with-label-element)」を参照してください。


### `input`要素では適切な`type`属性を使う<span id="use-appropriate-type-attribute-for-input-element"></span>

適切な`type`属性により、ブラウザーは`input`要素へちょっとした機能を与えてくれます。

悪い例:

    <label>Search keyword: <input name="q" type="text"></label>

良い例:

    <label>Search keyword: <input name="q" type="search"></label>

現在のHTML仕様では、`input`要素で使える`type`属性が大幅に拡充されました。HTML 4.01では10種類でしたが、20種類以上になっています。これは機械的に値を扱いやすくなったことも意味しますが、同時に様々なツールが最適なインターフェイスを提供できるということでもあります。デバイスに保存された情報で自動的に埋めてくれたり、専用の補完候補を出したり、キーボードを切り替えたりするのはそのひとつです。

例えば検索フォームを例にしてみましょう。HTML 4.01の時代は、悪い例で挙げたように`type="text"`を利用していました。もちろんこのままで機能しますが、良い例で挙げたように、より適した`type="search"`を使うと、例えばデスクトップ・ブラウザーでは入力ボックスの端に✕のアイコンを表示し、キーワードをクリアする機能を提供します。

このことは検索結果ページなどで検索文字列が入力済みの場合に大いに役立ちます。新しく検索する時、今までは入力ボックスにフォーカスを当ててから、選択して削除するかBackspaceキーを連打する必要がありました。しかし`type="search"`を指定してあれば、✕のアイコンを押すだけで消えてくれます。アイコンを押すと同時に入力ボックスへフォーカスも移るので、今まで必ず3アクション以上かかっていた操作が、1アクションで済むわけです。

どれくらい便利になるかはアプリケーションの実装に依存しますが、不便になるということはまずありません。積極的に採用し、少しでもユーザーの手間を減らしましょう。


### `input type="submit"`には`value`属性を追加する<span id="add-value-attribute-to-input-typesubmit"></span>

送信ボタンは、そのデフォルトのラベルがブラウザーや言語設定によって変わってしまいます。

悪い例:

    <input type="submit">

良い例:

    <input type="submit" value="Search">

フォームの送信には、できる限り`type`属性の値を`submit`にした`input`要素を使用すべきです。そうでないフォーム、例えば`type=submit`である送信ボタンがなかったり、送信ボタンらしきものがあっても`type=button`であったりすると、他の入力フォーム要素でEnterキーを押しても何も起こりません。たまに、検索フォームのキーワードを入れ、Enterキーを押しても無反応なウェブサイトを見かけることはないでしょうか？こういった一般的ではない挙動をするフォームにユーザーは戸惑ってしまいます。

`type=submit`である`input`要素を設置すればそれでよいか、というとそれだけではありません。そのままだとボタンに表示される文字列が、ブラウザーとユーザーの環境の両方に依存するからです。

悪い例で挙げたように`type`属性だけを指定してもフォーム送信ボタンとしては問題なく機能します。しかしInternet Explorer 10が日本語に設定されている場合は「クエリ送信」と、Chrome 45が英語に設定されている場合は「Submit」と、まったく違った文字が表示されます。残念ながらブラウザーによる違いはもちろん、言語設定による違いも吸収することはできません。

重要なのは、ブラウザーが使用するこのデフォルトの体裁が、何をどうするのかはともかく、その結果として*何が得られるのか*がユーザーに非常にわかりづらいことでしょう。「クエリ送信」ではボタンを押すまでどのようなアクションが起こるのか想像できません。

`value`属性を使うとこの送信ボタンに表示される文字列を変えられます。良い例で挙げたように「検索」とすることで、このボタンが設置されているフォームが検索フォームであることがわかりますし、送信した結果として検索結果が表示されることが期待できるでしょう。つまり、よりユーザーにわかりやすいフォームとなるわけです。


### `pattern`属性を持つ`input`要素には`title`属性を追加する<span id="add-title-attribute-to-input-element-when-there-is-pattern-attribute"></span>

もし入力したテキストが`pattern`属性にマッチしない場合、`title`属性の値がヒントとして表示されます。

悪い例:

    <input name="security-code" pattern="[0-9]{3}" type="text">

良い例:

    <input name="security-code" pattern="[0-9]{3}" title="A security code is a number in three figures." type="text">

`input`要素では`pattern`属性を使ってクライアント側での入力チェックを行うことができます。主に、ユーザーへ入力に制限があることを明示的に示すために利用します。例えば非対応のブラウザーではチェックされないので、サーバー側で値を信頼することはできないため、そのような用途にのみ制限されることでしょう。このクライアント側でのチェック機能は`pattern`属性の値として正規表現を指定して行います。

例えばセキュリティー・コードとして3桁の数字を要求するケースを考えてみましょう。悪い例で挙げたように書くと、対応しているブラウザーは不正な値を送信（入力ではありません）しようとした時にキャンセルされます。しかしこのままだとユーザーは*なぜキャンセルされたのか*はわかりません。

良い例で挙げたように、合わせて`title`属性が指定してあると様々な形でその値を警告として表示してくれます。`title`属性の値は自然文であると良いでしょう。どのように表示されるかはブラウザーによりますが、おおむね自然文であることが想定されています。

実際のフォームでは入力要素の前後に入力形式の指定を書くことがあり、そこで説明すればインタラクションを要する`title`属性に依存せずにも済みます。しかし基本的な形式を前後に書いた上で、`title`属性でよくあるミスやより詳細な形式について言及するなど、一定以上の利用価値はあるはずです。


### `placeholder`属性をラベル付けに使わない<span id="dont-use-placeholder-attribute-for-labeling"></span>

`label`要素がラベルのためにあり、`placeholder`属性は短いヒントのためにあります。

悪い例:

    <input name="email" placeholder="Email" type="text">

良い例:

    <label>Email: <input name="email" placeholder="john.doe@example.com" type="text"></label>

フォーム要素にラベルは絶対に必要です。ラベルがあれば、そのフォーム要素がなんのためのものかを入力する前にも後にも確認できるでしょう。しかし、ラベルはきれいに収めるのはとても難しいものです。対して、ブラウザーでフォーム要素に重ねて表示される`placeholder`属性はとても収まりが良く、すっきりとレイアウトされます。そのためこの属性をラベルに流用するウェブページはあとをたちません。

ラベル用途に使うことはできない、と仕様で明言されていることもありますが、それ以上にユーザーが入力すると消えてしまうため、ラベルとして機能しないことが問題です。ラベルは対応したもの（HTMLではフォーム要素）を識別しやすくする効果があります。もしラベルがないとフォーム要素の入力をひとつひとつ確認してなんのためのフォーム要素かを調べなければなりません。それだけでなく、似たような文字で入力されるフォーム要素の区別も容易につけられるようになります。数字のみで構成されるクレジットカード番号と電話番号を見分けるのは至難ですが、ラベルがあれば簡単でしょう。

また、`placeholder`属性で指定した文字列は、ユーザーが入力しはじめると消えてしまいます。そのためパッと見て理解できないような複雑なルールを書くには適しません。また、わかりやすく単純な入力例を書いてしまうと、ユーザーが入力済みだと誤解してしまうかもしれません。

そもそも`placeholder`属性が必要なのか、から考えることも必要でしょう。その上で良い例で挙げたように`label`要素を使いつつ、簡単な入力例などにのみ利用しましょう。


### `option`要素は1行に1つ書く<span id="write-one-option-element-per-line"></span>

長い行は把握しづらいです。

悪い例:

    <datalist id="toc">
      <option label="General"><option label="The root element"><option label="Sections">
    </datalist>

良い例:

    <datalist id="toc">
      <option label="General">
      <option label="The root element">
      <option label="Sections">
    </datalist>

「[リスト項目は1行に1つずつ書く](#write-one-list-item-per-line)」を参照してください。


### `progress`要素には`max`属性を追加する<span id="add-max-attribute-to-progress-element"></span>

`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <progress value="0.5"> 50%</progress>

良い例:

    <progress max="100" value="50"> 50%</progress>

現在のHTML仕様で新設された`progress`や`meter`要素は経過や蓄積を表現する要素です。どれくらい過ぎたかや溜まったかは`value`属性を使って表現します。その`value`属性では0から1の間で指定しますが、同時に`min`属性や*特に`max`属性*を指定しておくことでその範囲を変更できます。

悪い例では「50%進んでいる」ことを表現するのに`value`属性で`0.5`を指定しています。対して良い例で挙げたように`max`属性で`100`を指定しておくと、同じ表現を`50`でできるようになります。どちらがわかりやすいかは明白でしょう。

このことは`progress`や`meter`要素をJavaScriptで操作する時にもメリットがあります。悪い例で挙げたように`max`属性がないと、`value`属性の値と中身のために、数字を整形するコードを書き分けなければなりません。良い例で挙げたように両者を同じ数字で扱えるようにしておけば、より簡潔にコードが書けるはずです。


### `meter`要素では`min`及び`max`属性を追加する<span id="add-min-and-max-attribute-to-meter-element"></span>

`min`と`max`属性があると、`value`属性を簡単な形式で書けます。

悪い例:

    <meter value="0.5"> 512GB used (1024GB total)</meter>

良い例:

    <meter min="0" max="1024" value="512"> 512GB used (1024GB total)</meter>

「[`progress`要素には`max`属性を追加する](#add-max-attribute-to-progress-element)」を参照してください。


### `legend`要素は`fieldset`要素の最初に置く<span id="place-legend-element-as-the-first-child-of-fieldset-element"></span>

仕様がそう要求しています。

悪い例:

    <fieldset>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
      <legend>About "General"</legend>
    </fieldset>

良い例:

    <fieldset>
      <legend>About "General"</legend>
      <p><label>Is this section is useful?: <input name="usefulness-general" type="checkbox"></label></p>
      ...
    </fieldset>

長いフォームを分割する時、関連するフォーム・コントロールを`fieldset`要素を使ってまとめると、一括した操作を行えるようになります。その際、`legend`要素を使いそのグループにキャプションをつけることが可能です。`figure`と`figcaption`要素の関係に似ていますが、`legend`要素は`fieldset`要素の最初にしか書くことができません。

このことは仕様で明示されています。多くの現行ブラウザーでは、どこに書いても正常に表示されるようですが、通常`fieldset`要素でグループ化された枠線で括られ、`legend`要素がある場合はその上部枠線に重なる形で表示されます。キャプションの水平方向の位置は記述方向に依存しますが、まず間違いなく上に表示されるでしょう。仕様で決められているからというだけでなく、HTMLソースとその表示の対応性も考慮すると、`legend`要素は最初に書くべきです。


## スクリプティング

### JavaScriptでは`type`属性を省略する<span id="omit-type-attribute-for-javascript"></span>

HTMLでは、`script`要素における`type`属性の初期値は`text/javascript`です。

悪い例:

    <script type="text/javascript">
      ...
    </script>

良い例:

    <script>
      ...
    </script>

「[CSSの`type`属性は省略する](#omit-type-attribute-for-css)」を参照してください。


### `script`要素の中をコメントアウトしない<span id="dont-comment-out-contents-of-script-element"></span>

この儀式は古いブラウザーのためです。

悪い例:

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

同じく悪い例:

    <script>
    <!--
      ...
    // -->
    </script>

良い例:

    <script>
      ...
    </script>

歴史的な事情によりいくつかの要素内は安全のためコメントで括るとされていました。例えば`style`要素内が以下のように書かれているのを見たことがあるかもしれません。

    <style>
    <!--
      ...
    -->
    </style>

HTMLのコメントを利用してスタイル全体をコメントアウトしています。また`script`要素では驚くべきことに以下のような摩訶不思議な書き方をするようにと推奨されていたこともあります。

    <script>
    /*<![CDATA[*/
      ...
    /*]]>*/
    </script>

CDATAセクションでスクリプト全体を括った上で、CDATAセクションの開始と終了シーケンスがスクリプトとして実行されないようにJavaScriptのコメントを使ってコメントアウトしているわけです。

こうすることで未熟なブラウザーがスクリプトをそのまま画面に表示してしまうということを避けられます。そういった意味では一定の効果はあると言えますが、もはやそのようなブラウザーの数は考慮に値するほど存在していません。また新しく作られた要素群を使ってHTML文書を書く以上、それらのブラウザーが適切に解釈してくれるとは考えられず、ここだけ考慮してやる意味はもうないでしょう。

特に奇抜なことをせず、良い例で挙げたようにそのまま書くだけできちんと解釈してもらえます。


### `script`要素を動的に生成するテクニックを使わない<span id="dont-use-script-injected-script-element"></span>

明快さとパフォーマンスの両面で`async`属性が最良です。

悪い例:

    <script>
      var script = document.createElement("script");
      script.async = true;
      script.src = "//example.com/widget.js";
      document.getElementsByTagName("head")[0].appendChild(script);
    </script>

良い例:

    <script async defer src="https://example.com/widget.js"></script>

Google Analyticsを始め、多くのサードパーティー製JavaScriptアプリケーションは、悪い例で挙げたようなコードを使ってウェブページに導入します。これは動的に`script`要素を挿入することによって、どのようなブラウザーでもHTML文書の読み込みをブロックすることなく読み込めるからです。これはパフォーマンスにおいてメリットがある、とされてきました。

しかし、この[適切に使えばパフォーマンスにおいて大きなメリットがあるという勘違い](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/)は否定されました。そこそこ古いブラウザーにもプリロード・スキャナーの仕組みがあり、それによる読み込みの効率化の方が、DOMを構築した後に発火される動的な生成による効率化を上回るわけです。

しかも今のブラウザーは`async`属性という非同期に`src`属性で指定されたJavaScriptファイルを読み込む手段をサポートしています。JavaScriptの実行順について以外は上位互換と考えて良く、使わない理由はありません。


## その他

### 一貫した量でインデントする<span id="indent-consistently"></span>

インデントは読みやすさにおいて重要です。

悪い例:

    <html>
    	<head>
    	  ...
    	</head>
      <body>
        ...
      </body>
    </html>

良い例:

    <html>
      <head>
        ...
      </head>
      <body>
        ...
      </body>
    </html>

HTML文書はツリー構造です。タグを省略しない場合、インデントするとツリー構造とコードを対比させられます。そのことはタグの閉じ忘れのようなケアレスミスを防止するだけでなく、他の人がHTMLコードを確認する時にも大いに役に立つでしょう。

ただし、それも同じ量を使ってインデントしていた場合に限ります。最近の高性能なエディターではインデントにガイドが用意されている（縦線でつないでわかりやすくしてくれる）ことも多いですが、各人の設定に依存しますし、そういった環境であることを前提にはできないでしょう。GitHubなどでレビューする時も含め、同じ量によるインデントは環境に依存しません。

インデントに使う文字として、タブとスペースは一長一短で、優劣はありません。タブの場合はコード・サイズが少なく済みますが、環境にインデント量が依存します。スペースは環境に依存しませんが、コード・サイズは増えます。どちらがメジャーかということもこのままフォーマッターが浸透していくとツール次第になるでしょうし、統一さえされていればどちらでも良いでしょう。悪い例で挙げたようなタブとスペースを混ぜるなどということだけは*絶対に*避けるべきです。


### 内部リンクには絶対パスを使う<span id="use-absolute-path-for-internal-links"></span>

絶対パスはインターネット回線のないローカルの環境でもうまく動きます。

悪い例:

    <link rel="apple-touch-icon" href="http://you.example.com/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="//you.example.com/contact.html">contact page</a>.</p>

良い例:

    <link rel="apple-touch-icon" href="/apple-touch-icon-precomposed.png">
    ...
    <p>You can find more at <a href="/contact.html">contact page</a>.</p>

HTML文書に書かれたURLは、そのHTML文書のURLを元に解決されるため、かなり省略できます。限界まで省略するとコード・サイズが抑えられますが、省略しすぎると再利用性が薄れてしまいます。特にウェブサイトの内部リソース、つまり同じドメイン配下のファイルへは絶対パスを使うとバランスが良いはずです。

絶対URL（`https:`で始まるURL）は、内部リンクには明らかに冗長です。一番短くしやすい相対パスは、リソースの移動に対して一括置換などで対処するのを難しくするでしょう。

絶対パス（スラッシュで始まるパス）は多少の冗長さと引き換えになりますが、どのリソースからもどのリソースへも同じ文字列でリンクできます。リソースの移動には書き換えはもちろん必要ですが、一括置換で対処できるでしょう。また`http:`から`https:`へ切り替えようと考えている場合にもそのままで運用を続けられるはずです。


### 外部リソースにはプロトコル相対URLを使わない<span id="dont-use-protocol-relative-url-for-external-resources"></span>

プロトコルを指定すると、外部リソースを確実かつ安全に読み込めます。

悪い例:

    <script src="//example.com/js/library.js"></script>

良い例:

    <script src="https://example.com/js/library.js"></script>

かつて、古いブラウザーが安全なリソースとそうでないリソースが混在しているという警告を、モーダル・ダイアログで出していました。こういったモーダル・ダイアログはユーザーに深刻な状況を想起させてしまうだけでなく、煩わしいものです。ウェブページ制作者としてはなんとしても避けたい事態でしょう。

そのため悪い例で挙げたようなコードがベスト・プラクティスとされていました。こうすることでユーザーが閲覧している状況に応じて、外部リソースのプロトコルが適宜選択されるので、ブラウザーが警告が出さないからです。

しかし、外部リソースの読み込みは常に危険を伴います。しばらく前には[GitHubがダウンするような事態](https://www.netresec.com/?page=Blog&month=2015-03&post=China%27s-Man-on-the-Side-Attack-on-GitHub)も引き起こされています。できうる限りHTTPSで提供される外部リソースのみを読み込むべきです。プロトコルを省略しないという簡単なルールにより、`https:`ならば安全が保障され、`http:`ならば危険を伴うことが意識できるでしょう。




## ライセンス

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
