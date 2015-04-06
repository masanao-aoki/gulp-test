# gulp-test

社内向けautoprefixerの導入テスト

## 問題点

* 同じファイルに上書きの場合、値を変更した際は反応がない。
* sublimeの拡張の場合、sublime側の設定になるので、案件毎に都度変える必要性がある。
* sublime版では、watchが出来ないため自身でCSSを選択し実行する必要性がある。

### 解決法

* サーバーサイドにgulp-autoprefixerを仕込んで、コンパイルする。これであれば、実ファイルは１つで管理できる。

### 使用する物

* Node.js（Homebrew「nodebrew」でインストールも可）
* npm（Node.jsをインストールしたら自動的にはいる）
* package.json（npm install 実行時にインストールされるパッケージを記述したファイル）
* Gulp（タスク自動化のビルドツール）
* gulp-autoprefixer（Gulp版のautopreficer）
* gulpfile.js（gulpのタスクを定義するファイル）
