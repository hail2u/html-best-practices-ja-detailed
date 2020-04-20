# `option`要素は1行に1つ書く

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

「[リスト項目は1行に1つずつ書く][1]」を参照してください。


[1]: write-one-list-item-per-line.ja.md
