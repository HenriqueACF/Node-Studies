import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1648075222293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns:[
                    {
                        name: "id",
                        type: "uuid",

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
