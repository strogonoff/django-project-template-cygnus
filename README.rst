Django project template
=======================

Includes a Vagrantfile and an Ansible playbook.

Sets up the machine with PostgreSQL, Nginx, Gunicorn.

Pass following parameters:

- ``--secret_key <Django secret key, see docs>``
- ``--db_user_pass <password to use for app’s PostgreSQL user>``
- ``--name vars.yaml Vagrantfile``