<template>
  <section>
    <div class="CompanyAbout">
      <div class="CompanyAbout_info">
        <div class="CompanyAbout__info__title">
          COMPANY
        </div>

        <div class="CompanyAbout__info__table">
          <table>
            <tr>
              <td class="CompanyAbout__info__table-title">社名</td>
              <td class="CompanyAbout__info__table-text">CLITCH株式会社(クリッチ)</td>
            </tr>

            <tr>
              <td class="CompanyAbout__info__table-title">代表取締役</td>
              <td class="CompanyAbout__info__table-text">佐藤 将彦</td>
            </tr>

            <tr>
              <td class="CompanyAbout__info__table-title">取締役</td>
              <td class="CompanyAbout__info__table-text">丸谷 凜太郎</td>
            </tr>

            <tr>
              <td class="CompanyAbout__info__table-title">概要</td>
              <td class="CompanyAbout__info__table-text">マッチングプラットフォームの運営・開発</td>
            </tr>

            <tr>
              <td class="CompanyAbout__info__table-title">メール</td>
              <td class="CompanyAbout__info__table-text">info@clitch.life</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="CompanyAbout__image">
        <img src="src/assets/img/ClitchIcon.svg">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: $background-color-white;
  min-height: 480px;

  @include sp-device {
    min-height: 436px
  }
}

.CompanyAbout {
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @include md-device-or-less {
    width: 95%;
  }

  @include sm-device-or-less {
    flex-direction: column;
  }

  &__info {
    &__title {
      @include roboto-bold;
      line-height: 42px;
      font-size: 36px;
      color: $text-black;
      padding-top: 106px;
      margin-bottom: 20px;

      @include sp-device {
        padding-top: 36px;
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 15px;
      }
    }

    &__table {
      tr {
        border-bottom: 1px solid $border-gray;
      }

      &-title {
        @include roboto-bold;
        line-height: 18px;
        font-size: 14px;
        color: $text-gray;
        width: 120px;
        padding: 16px 0 8px 0;

        @include sp-device {
          width: 70px;
          font-size: 12px;
          line-height: 14px;
        }
      }

      &-text {
        @include roboto-bold;
        line-height: 17px;
        font-size: 18px;
        color: $text-black;
        padding: 12px 0;

        @include sp-device {
          font-size: 14px;
          line-height: 16px;
          padding: 12px 0 5px 0;
        }
      }
    }
  }

  &__image {
    padding: 10rem 0 0 10px;

    @include sm-device {
      padding: 40px 0 56px 0;
    }

    @include xs-device-or-less {
      padding: 24px 0 36px 0;
    }

    svg {
      @include sm-device-or-less {
        width: 103px;
        height: 104px;
      }
    }
  }
}
</style>