import {
    Column,
    CreateDateColumn,
    Entity, Generated,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn
} from "typeorm";

@Entity()
export class UserModel {

    // ID
    // 모든 테이블에서 기본적으로 존재해야 한다.
    // 테이블 안에서 각각의 Row를 구분 할 수 있는 칼럼이다.

    // 자동으로 ID를 증가시키며 생성한다.
    // @PrimaryGeneratedColumn()

    // ID를 자동으로 생성해주지 않는다. 하지만 PK로 설정한다.
    // @PrimaryColumn()

    // uuid를 통하여 고유한 값으로 ID를 설정해준다.
    // @PrimaryGeneratedColumn("uuid")

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        // 데이터베이스에 저장될 타입을 지정해줄 수 있다.
        // type: 'text'
        type: 'varchar',

        // 데이터베이스에 저장될 칼럼 이름을 지정해줄 수 있다.
        name: '_title',

        // 데이터베이스에 저장할 값의 길이
        length: 300,

        // null이 가능한지 여부
        nullable: true,

        // false이면 처음 데이터가 생성되면 이후 업데이트가 불가능하다.
        update: true,

        // find() 등으로 데이터를 조회할 때
        // false로 두면 기본적으로 해당 컬럼은 조회하지 않는다.
        // 기본값 true
        select: false,

        // 데이터 생성 시 해당 컬럼에 값을 주지 않으면 기본값으로 설정된다.
        default: "default value",

        // 해당 컬럼이 유일무이한 데이터가 와야 하는지 여부
        unique: false
    })
    title:string;

    // 데이터 생성 일자
    // 데이터가 생성되는 날짜와 시간으로 자동으로 설정해준다.
    @CreateDateColumn()
    createdAt: Date;

    // 데이터 업데이트 일자
    // 데이터가 업데이트되는 날짜와 시간으로 자동으로 설정해준다.
    @UpdateDateColumn()
    updatedAt: Date

    // 데이터가 업데이트 될때마다 1씩 올라간다.
    // 처음 생성될때 값은 1이다.
    // => 정확히 말하자면, save() 함수가 몇번 불렸는지 기억한다.
    @VersionColumn()
    version: number

    @Column()
    // @Generated('increment') // 1씩 증가.
    // additionalId: number
    @Generated('uuid') // uuid로 자동 설정해 준다.
    additionalId: string


}